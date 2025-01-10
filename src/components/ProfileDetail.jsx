import React from "react";
import { useAuth } from "../context/AuthContext";
import 'animate.css';

// npm install animate.css --save

function ProfilePage() {

    const { user } = useAuth()


    return (
        <div className="min-h-screen bg-base-200">
            <section className="container mx-auto">
                {/* Profil Kartı */}
                <div className="card flex flex-col items-center justify-center shadow-xl animate-fade-in py-10">
                    <div className="card-body bg-base-100 hover:-translate-y-5 rounded-lg">
                        {/* Başlık */}
                        <h2 className="text-center animate__animated animate__fadeInDown text-2xl">
                            <i className="fas fa-user-circle"></i> Profil Bilgileri
                        </h2>

                        {/* Profil Resmi */}
                        <div className="text-center my-4">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    {
                                        user.photoURL ? <img src={user.photoURL} />

                                            : <img src="./user.png" alt="Profile" />
                                    }

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
                                <span>
                                    {user.displayName}
                                </span>
                            </div>

                            {/* Ad */}
                            <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInRight flex items-center gap-2">
                                <i className="fas fa-signature mr-2"></i>
                                <span className="font-bold">Ad:</span>
                                <span>
                                    {user.firstName}
                                </span>
                            </div>

                            {/* Soyad */}
                            <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInLeft flex items-center gap-2">
                                <i className="fas fa-signature mr-2"></i>
                                <span className="font-bold">Soyad:</span>
                                <span>
                                    {user.lastName}
                                </span>
                            </div>

                            {/* E-posta */}
                            <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInRight flex items-center gap-2">
                                <i className="fas fa-envelope mr-2"></i>
                                <span className="font-bold">E-posta:</span>
                                <span>
                                    {user.email}
                                </span>
                            </div>

                            {/* Biyografi */}
                            <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInLeft flex items-center gap-2">
                                <i className="fas fa-book mr-2"></i>
                                <span className="font-bold">Biyografi:</span>
                                <span>
                                    {user.bio}
                                </span>
                            </div>


                        </div>
                        {/* Düzenleme Butonu */}
                        <div className="text-center mt-4">
                            <button className="btn btn-info animate__animated animate__bounceIn">
                                <i className="fas fa-edit"></i> Profili Düzenle
                            </button>
                        </div>
                        {/* Konum */}
                        {user.location && (
                            <div className="bg-base-200 p-4 rounded-lg animate__animated animate__fadeInRight flex items-center gap-2">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                <span className="font-bold">Konum:</span>
                                <span>
                                    {user.location}
                                </span>
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
                </div>
            </section>
        </div>


    );
}

export default ProfilePage;