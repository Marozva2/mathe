import { useState, useEffect } from "react";
import { FiUser, FiUpload } from "react-icons/fi";

function Settings() {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    profilePicture: "",
  });

  const [accountSettings, setAccountSettings] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    emailNotifications: true,
    twoFactorAuth: false,
  });

  // Replace this with actual user ID retrieval method
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Example: Fetch user ID from local storage or authentication context
    const fetchedUserId = localStorage.getItem("userId");
    setUserId(fetchedUserId);
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleAccountChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAccountSettings({
      ...accountSettings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({
          ...profileData,
          profilePicture: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("User ID is not available.");
      return;
    }
    try {
      const response = await fetch(`/settings/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: profileData.email,
          username: profileData.name,
        }),
      });
      if (!response.ok) throw new Error("Failed to update profile");
      const result = await response.json();
      console.log("Profile updated:", result);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile.");
    }
  };

  const handleSubmitAccount = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("User ID is not available.");
      return;
    }
    if (accountSettings.newPassword !== accountSettings.confirmNewPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch(`/settings/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: accountSettings.newPassword,
        }),
      });
      if (!response.ok) throw new Error("Failed to update account settings");
      const result = await response.json();
      console.log("Account settings updated:", result);
      alert("Account settings updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update account settings.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-3xl mx-auto space-y-8">
      <h2 className="text-center text-2xl font-bold mb-4">Settings</h2>

      {/* Profile Settings Section */}
      <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
        <form onSubmit={handleSubmitProfile} className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20">
              {profileData.profilePicture ? (
                <img
                  src={profileData.profilePicture}
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              ) : (
                <FiUser className="w-full h-full text-gray-300 rounded-full border border-gray-300" />
              )}
            </div>
            <label
              className="flex items-center bg-[#6e3f41] text-white px-3 py-2 rounded cursor-pointer hover:bg-[#68d9fe] transition duration-300"
              htmlFor="upload-profile-picture"
            >
              <FiUpload className="mr-2" />
              Upload Picture
              <input
                id="upload-profile-picture"
                type="file"
                accept="image/*"
                onChange={handleProfilePictureUpload}
                className="hidden"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-[#6e3f41] font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
                className="p-2 bg-[#e8e5e5] text-[#6e3f41] rounded focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#6e3f41] font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                className="p-2 bg-[#e8e5e5] text-[#6e3f41] rounded focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#6e3f41] font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleProfileChange}
                className="p-2 bg-[#e8e5e5] text-[#6e3f41] rounded focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-[#6e3f41] text-white px-6 py-2 rounded hover:bg-[#68d9fe] hover:text-[#6e3f41] transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Account Settings Section */}
      <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
        <form onSubmit={handleSubmitAccount} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-[#6e3f41] font-semibold mb-1">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={accountSettings.currentPassword}
                onChange={handleAccountChange}
                className="p-2 bg-[#e8e5e5] text-[#6e3f41] rounded focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#6e3f41] font-semibold mb-1">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={accountSettings.newPassword}
                onChange={handleAccountChange}
                className="p-2 bg-[#e8e5e5] text-[#6e3f41] rounded focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#6e3f41] font-semibold mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmNewPassword"
                value={accountSettings.confirmNewPassword}
                onChange={handleAccountChange}
                className="p-2 bg-[#e8e5e5] text-[#6e3f41] rounded focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-[#6e3f41] text-white px-6 py-2 rounded hover:bg-[#68d9fe] hover:text-[#6e3f41] transition duration-300"
            >
              Update Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
