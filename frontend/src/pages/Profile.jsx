const Profile = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-8">
        <div className="container mx-auto">
        <div className="bg-slate-50  p-4 text-left">
        <h1 className="text-2xl font-bold text-gray-800">User Name</h1>
      </div>

      <section className="mt-8 p-4">
        <h2 className="text-lg font-semibold mb-4">Published</h2>
        {/* Add your content for Published section here */}
      </section>

      <section className="mt-8 p-4">
        <h2 className="text-lg font-semibold mb-4">Saved</h2>
        {/* Add your content for Saved section here */}
      </section>

      <section className="mt-8 p-4">
        <h2 className="text-lg font-semibold mb-4">Liked</h2>
        {/* Add your content for Liked section here */}
      </section>

        </div>
      
    </div>
  );
};

export default Profile;
