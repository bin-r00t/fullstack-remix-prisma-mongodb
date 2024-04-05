import { ActionFunction } from "@remix-run/node";
import { Form, Link, useNavigation } from "@remix-run/react";
import { EventHandler, MouseEventHandler, useEffect, useState } from "react";
import { redirect } from "react-router";
import { Card } from "~/components/card";
import { Layout } from "~/components/layout";

export default function Login() {
  const [signup, setSignup] = useState(false);
  const navigation = useNavigation();
  const lock = navigation.state !== "idle";

  const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    setSignup((signup) => !signup);
  };

  return (
    <Layout>
      <div className="flex h-full flex-col gap-5 justify-center items-center">
        <h2 className="text-white font-bold text-3xl text-left">Sign In</h2>
        <Card className={"w-96"}>
          <Form method="post" className="flex flex-col gap-8">
            <div className="form-item shadow-2xl flex flex-col divide-y">
              <input
                type="email"
                placeholder="Email"
                className="outline-none rounded-tl-xl rounded-tr-xl p-2 px-5"
              />
              <input
                type="password"
                placeholder="Password"
                className="outline-none rounded-bl-xl rounded-br-xl p-2 px-5"
              />
            </div>

            <div className="form-item shadow-lg">
              <input
                type="submit"
                value={lock ? "Submitting..." : "Sign in"}
                className="bg-slate-500 block p-3 w-full rounded-xl text-lg font-semibold cursor-pointer hover:bg-slate-400 transition text-white"
              />
            </div>
            {!signup && (
              <p className="form-item text-white text-sm text-center">
                Don't have an account?{" "}
                <a
                  href=""
                  className="text-slate-400 font-semibold underline underline-offset-1"
                >
                  Sign up
                </a>{" "}
                here.
              </p>
            )}
            {signup && (
              <p className="form-item text-white text-sm text-center">
                Already have an account?{" "}
                <a
                  href=""
                  type="button"
                  onClick={handleLinkClick}
                  className="text-slate-400 font-semibold underline underline-offset-1"
                >
                  Login
                </a>
                .
              </p>
            )}
          </Form>
        </Card>
      </div>
    </Layout>
  );
}

// export const action: ActionFunction = async ({ request }) => {
//   console.log("request", request);
//   return redirect("/login");
// };
