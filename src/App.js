import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, clearUser } from "./Reducer/userSlice";
import { db, auth } from "./firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Helmet } from "react-helmet-async";

import ToTop from "./Component/ToTop";
import Bg from "./Component/Bg";
import Test from "./Component/Test";
import AdminRegist from "./Component/AdminRegist";
import AdminLogin from "./Component/AdminLogin";
import GiftAdmin from "./Component/GiftAdmin/GiftAdmin";
import GiftAdminMain from "./Component/GiftAdmin/Main";
import Main from "./Component/Homepage/Main";
import Home from "./Component/Homepage/Home";
import Redirect from "./Component/Homepage/Redirect";
import Intro from "./Component/Homepage/Intro";
import Consulting from "./Component/Homepage/Consulting";
import Marketing from "./Component/Homepage/Marketing";
import History from "./Component/Homepage/History";
import AddGallery from "./Component/GiftAdmin/AddGallery";
import Gallery from "./Component/Homepage/Gallery";
import GalleryDetail from "./Component/Homepage/GalleryDetail";
import Gallery1 from "./Component/Homepage/Gallery1";
import Gallery2 from "./Component/Homepage/Gallery2";
import ERR404 from "./Component/Homepage/Mobile/ERR404";
import Mobile from "./Component/Homepage/Mobile/Mobile";
import MobileMain from "./Component/Homepage/Mobile/Main";
import MobileGallery from "./Component/Homepage/Mobile/Gallery";
import MobileGallery1 from "./Component/Homepage/Mobile/Gallery1";
import MobileGallery2 from "./Component/Homepage/Mobile/Gallery2";
import MobileIntro from "./Component/Homepage/Mobile/Intro";
import MobileConsulting from "./Component/Homepage/Mobile/Consulting";
import MobileMarketing from "./Component/Homepage/Mobile/Marketing";
import MobileHistory from "./Component/Homepage/Mobile/History";
import MobileGalleryDetail from "./Component/Homepage/Mobile/GalleryDetail";
import Loading from "./Component/Loading";

function App() {
  const navi = useNavigate();
  const [loginChk, setLoginChk] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user !== null) {
        getAdmin(user);
      } else {
        dispatch(clearUser());
      }
    });
    setLoginChk(true);
    // eslint-disable-next-line
  }, [dispatch]);

  const thisLocation = useLocation();

  useEffect(() => {
    const chkMobile = location => {
      const userAgent = navigator.userAgent;
      const isMobileDevice =
        /Mobi/i.test(userAgent) || /Android/i.test(userAgent);
      if (isMobileDevice && location === "home") {
        navi("/mobile");
      } else if (!isMobileDevice && location === "mobile") {
        navi("/home");
      }
    };

    const result1 = thisLocation.pathname.includes("/home");
    const result2 = thisLocation.pathname.includes("/mobile");
    if (result1) {
      chkMobile("home");
    } else if (result2) {
      chkMobile("mobile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thisLocation, navi]); // Make sure navi is also in the dependency array if it's a function from props or context.

  const getAdmin = async user => {
    if (user.displayName !== "admin") {
      if (user.uid !== "") {
        let applyRef = collection(db, "apply");
        let result = await getDoc(doc(applyRef, `${user.uid}`));
        if (!result.data()) {
          dispatch(
            loginUser({
              uid: user.uid,
              accessToken: user.accessToken,
              admin: false,
              name: "",
              point: 0,
              phone: "",
            })
          );
        } else {
          dispatch(
            loginUser({
              uid: user.uid,
              accessToken: user.accessToken,
              admin: false,
              name: result.data().name,
              point: result.data().point,
              phone: result.data().phone,
            })
          );
        }
      }
    } else {
      if (user.uid !== "") {
        let applyRef = collection(db, "admin");
        let result = await getDoc(doc(applyRef, `${user.uid}`));
        dispatch(
          loginUser({
            uid: user.uid,
            accessToken: user.accessToken,
            admin: true,
            name: result.data().name,
            point: 0,
            phone: 0,
          })
        );
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>채용 No.1! 코리아티엠</title>
      </Helmet>
      {!loginChk ? (
        <Loading />
      ) : (
        <>
          <Bg />
          <Routes>
            <Route path="/" element={<Redirect />} />
            <Route path="/home" element={<Home />}>
              <Route path="" element={<Main />} />
              <Route path="intro" element={<Intro />} />
              <Route path="consulting" element={<Consulting />} />
              <Route path="marketing" element={<Marketing />} />
              <Route path="history" element={<History />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="gallery1" element={<Gallery1 />} />
              <Route path="gallery2" element={<Gallery2 />} />
              <Route path="gallerydetail" element={<GalleryDetail />} />
            </Route>
            <Route path="/mobile" element={<Mobile />}>
              <Route path="" element={<MobileMain />} />
              <Route path="err" element={<ERR404 />} />
              <Route path="intro" element={<MobileIntro />} />
              <Route path="consulting" element={<MobileConsulting />} />
              <Route path="marketing" element={<MobileMarketing />} />
              <Route path="history" element={<MobileHistory />} />
              <Route path="gallery" element={<MobileGallery />} />
              <Route path="gallery1" element={<MobileGallery1 />} />
              <Route path="gallery2" element={<MobileGallery2 />} />
              <Route path="gallerydetail" element={<MobileGalleryDetail />} />
            </Route>
            <Route path="/test" element={<Test />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/admin" element={<GiftAdmin />}>
              <Route path="" element={<GiftAdminMain />} />
              <Route path="addgallery" element={<AddGallery />} />
            </Route>
            <Route path="/adminregist" element={<AdminRegist />} />
          </Routes>
          <ToTop />
        </>
      )}
    </>
  );
}

export default App;
