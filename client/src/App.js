import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar/NavigationBar'
import Footer from './components/Footer';

import CoursesLayout from './components/CoursesLayout';
import CourseScheduling from './components/CourseScheduling';

function App() {
    const [user, setUser] = useState('none');

    return (
        <div className="app bg-white">
            <Header/>
            <main className="flex justify-center min-h-[85vh]">
                <div className='container-main flex'>
                    <NavigationBar
                        user={'student'}
                    />
                    <Routes>
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
