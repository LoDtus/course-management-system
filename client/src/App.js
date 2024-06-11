import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import NavigationBar from './components/NavigationBar/NavigationBar'
import Footer from './components/Footer';

import SavedSuccessfully from './components/Popup/SavedSuccessfully';

import Profile from './components/Profile';
import CoursesLayout from './components/CoursesLayout';
import CourseScheduling from './components/CourseScheduling';

function App() {
    const [user, setUser] = useState('none');
    const [saved, setSaved] = useState(false);

    return (
        <div className="app bg-white flex flex-col justify-center items-center">
            <Header/>
            <SavedSuccessfully
                saved={saved}
                setSaved={setSaved}
            />
            <main className="flex justify-center min-h-[85vh]">
                <div className='container-main flex'>
                    <NavigationBar
                        user={'student'}
                    />
                    <Routes>
                        <Route path="/profile" 
                            element={
                                <Profile
                                    setSaved={setSaved}
                                />
                            }
                        />
                        <Route path="/courses" 
                            element={
                                <CoursesLayout/>
                            }
                        />
                        <Route path="/course-scheduling" 
                            element={
                                <CourseScheduling/>
                            }
                        />
                    </Routes>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
