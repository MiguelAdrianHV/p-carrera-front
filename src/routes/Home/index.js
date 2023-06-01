import { lazy } from "react";
const HomeScreen = lazy(() => import("views/Home/HomeScreen"));
const KuderTestScreen = lazy(() => import("views/Home/KuderTest"));
const LearningTestScreen = lazy(() => import("views/Home/LearningTest"));
const LoginScreen = lazy(() => import("views/Home/Login"));
const RegisterScreen = lazy(() => import("views/Home/Register"));
export const homeRoutes = [
  {
    path: "/",
    component: HomeScreen,
    exact: true,
    isPrivate: true,
    accessWithoutLogin: false,
  },
  {
    path: "/login",
    component: LoginScreen,
    exact: true,
    isPrivate: false,
    accessWithoutLogin: true,
  },
  {
    path: "/register",
    component: RegisterScreen,
    exact: true,
    isPrivate: false,
    accessWithoutLogin: true,
  },
  {
    path: "/kuder",
    component: KuderTestScreen,
    exact: true,
    isPrivate: true,
    accessWithoutLogin: false,
  },
  {
    path: "/learning",
    component: LearningTestScreen,
    exact: true,
    isPrivate: true,
    accessWithoutLogin: false,
  },
];
