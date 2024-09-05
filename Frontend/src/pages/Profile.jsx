import { useState } from 'react';

const Profile = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center mb-5">
                    <div className="col-md-7">
                        <div className="card p-3 py-4">
                            <div className="text-center">
                                <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle" alt="Profile" />
                            </div>
                            <div className="text-center mt-3">
                                <span className="bg-secondary p-1 px-4 rounded text-white">🍕</span>
                                <h5 className="mt-2 mb-0">Felipe  Schidmt</h5>
                                <span>Mail: Felipeschidmt@gmail.com </span>
                                <div className="px-4 mt-1">
                                    <p className="fonts">Miembro : 10/05/2008</p>
                                </div>
                                <div className="buttons">
                                    <button className="btn btn-outline-primary px-4">Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
