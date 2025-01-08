import React from 'react';
import 'animate.css';
const ProfileDetail = () => {
    // Örnek kullanıcı verileri
    const user = {
        username: 'john_doe',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        profileImage: 'https://via.placeholder.com/150', // Varsayılan profil resmi
        bio: 'Merhaba, ben John! Yazılım geliştiriciyim ve yeni teknolojileri keşfetmeyi seviyorum.',
        location: 'İstanbul, Türkiye',
        website: 'https://johndoe.com',
    };

    return (
        <section className="container mx-auto my-10 py-10">
            {/* Profil Kartı */}
            <div className="card flex flex-col items-center justify-center shadow-xl animate-fade-in ">
                <div className="card-body bg-base-100 hover:-translate-y-5 rounded-lg">
                    {/* Başlık */}
                    <h2 className="text-center animate-slide-in-down text-2xl">
                        <i className="fas fa-user-circle"></i> Profil Bilgileri
                    </h2>

                    {/* Profil Resmi */}
                    <div className="text-center my-4">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user.profileImage} alt="Profile" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-error btn-sm mr-2">
                                <i className="fas fa-trash"></i>
                            </button>
                            <button className="btn btn-primary btn-sm">
                                <i className="fas fa-camera"></i>
                            </button>
                        </div>
                    </div>

                    {/* Profil Bilgileri */}
                    <div className="space-y-4">
                        {/* Kullanıcı Adı */}
                        <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInLeft flex items-center gap-2">
                            <i className="fas fa-user mr-2"></i>
                            <span className="font-bold">Kullanıcı Adı:</span>
                            <span>{user.username}</span>
                        </div>

                        {/* Ad */}
                        <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInRight flex items-center gap-2">
                            <i className="fas fa-signature mr-2"></i>
                            <span className="font-bold">Ad:</span>
                            <span>{user.firstName}</span>
                        </div>

                        {/* Soyad */}
                        <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInLeft flex items-center gap-2">
                            <i className="fas fa-signature mr-2"></i>
                            <span className="font-bold">Soyad:</span>
                            <span>{user.lastName}</span>
                        </div>

                        {/* E-posta */}
                        <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInRight flex items-center gap-2">
                            <i className="fas fa-envelope mr-2"></i>
                            <span className="font-bold">E-posta:</span>
                            <span>{user.email}</span>
                        </div>

                        {/* Biyografi */}
                        <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInLeft flex items-center gap-2">
                            <i className="fas fa-book mr-2"></i>
                            <span className="font-bold">Biyografi:</span>
                            <span>{user.bio}</span>
                        </div>

                        {/* Konum */}
                        {user.location && (
                            <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInRight flex items-center gap-2">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                <span className="font-bold">Konum:</span>
                                <span>{user.location}</span>
                            </div>
                        )}

                        {/* Website */}
                        {user.website && (
                            <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInLeft flex items-center gap-2">
                                <i className="fas fa-link mr-2"></i>
                                <span className="font-bold">Website:</span>
                                <a
                                    href={user.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {user.website}
                                </a>
                            </div>
                        )}
                    </div>
                    {/* Düzenleme Butonu */}
                    <div className="text-center mt-4">
                        <button className="btn btn-info animate-bounce-in">
                            <i className="fas fa-edit"></i> Profili Düzenle
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileDetail;