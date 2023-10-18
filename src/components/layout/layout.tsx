import {Outlet} from "react-router-dom";

export function Layout() {
    return (
        <div className="w-full min-h-screen flex bg-neutral-900 text-white justify-center">
            <Outlet />
        </div>
    );
}
