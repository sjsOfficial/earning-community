import AppDownload from "@/components/Home/AppDownload";
import PrivateRoute from "@/components/PrivateRoute";
import ProfileNavigation from "@/components/ProfileNavigation";
import ProfileSettings from "@/components/ProfileSettings";

export default function ProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateRoute>
      <div className="container mx-auto pt-4 md:pt-[100px] ">
        <div className="grid lg:grid-cols-3 gap-4 px-2 my-8 md:my-10">
          <ProfileSettings></ProfileSettings>
          <ProfileNavigation></ProfileNavigation>
        </div>
        {children}
        <AppDownload></AppDownload>
      </div>
    </PrivateRoute>
  );
}
