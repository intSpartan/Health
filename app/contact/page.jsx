"use client"

import React, { useId, useState } from 'react';
import { database } from '../firebase';
import { collection, addDoc, getDocs, setDoc, where, doc, query, updateDoc, deleteDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation';
import "./contactForm.css"
import { useAuth } from '@clerk/nextjs';


const ContactForm = () => {

    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const router = useRouter();


    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Age, setAge] = useState('');
    const [Weight, setWeight] = useState('');
    const [Height, setHeight] = useState('');
    const [Smoke, setSmoke] = useState('');
    const [Alcohol, setAlcohol] = useState('');
    const [Diet, setDiet] = useState('');
    const [Exercise, setExercise] = useState('');
    const [ExerciseDuration, setExerciseDuration] = useState('');
    const [BloodPressure, setBloodPressure] = useState('');
    const [BloodPressureValue, setBloodPressureValue] = useState('');
    const [MedicalIssue, setMedicalIssue] = useState('');
    const [FamilyMedical, setFamilyMedical] = useState('');
    const [Medication, setMedication] = useState('');
    const [Allergies, setAllergies] = useState('');
    const [Goals, setGoals] = useState('');
    const [ExtraInformation, setExtraInformation] = useState('');
    const dbRef = collection(database, "UserInformation")
    const handleSubmit = (e) => {
        // console.log(userId);
        e.preventDefault();
        addDoc(dbRef, {
            UserId: userId,
            Name: Name,
            Email: Email,
            Age: Age,
            Weight: Weight,
            Height: Height,
            Smoke: Smoke,
            Alcohol: Alcohol,
            Diet: Diet,
            Exercise: Exercise,
            ExerciseDuration: ExerciseDuration,
            BloodPressure: BloodPressure,
            MedicalIssue: MedicalIssue,
            FamilyMedical: FamilyMedical,
            Medication: Medication,
            Allergies: Allergies,
            Goals: Goals,
            ExtraInformation: ExtraInformation
        }).then(() => {
            alert("Form Submitted Successfully")
            router.push("/dashboard")
            setName("");
            setEmail("");
            setAge("");
            setWeight("");
            setHeight("");
            setSmoke("");
            setAlcohol("");
            setDiet("");
            setExercise("");
            setExerciseDuration("");
            setBloodPressure("");
            setBloodPressureValue("");
            setMedicalIssue("");
            setFamilyMedical("");
            setMedication("");
            setAllergies("");
            setGoals("");
            setExtraInformation("");
        }).catch((err) => {
            console.log("UserFound")
        })
    };

    async function func() {
        const q = query(collection(database, "UserInformation"), where("UserId", "==", myId));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log("No");
            router.push("/contact")
        }
        else {
            console.log("Yes");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                </div>
                <div class="container mx-auto p-4">
                    <h1 class="text-2xl font-bold mb-4">Health Information Form</h1>
                    <form>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">Name</label>
                            <input type="text" class="border border-gray-300 px-2 py-1 w-full" name="name" value={Name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">Email</label>
                            <input type="text" class="border border-gray-300 px-2 py-1 w-full" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">Age</label>
                            <input type="text" class="border border-gray-300 px-2 py-1 w-full" name="age" value={Age} onChange={(e) => setAge(e.target.value)} required />
                        </div>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">Height (in cm)</label>
                            <input type="text" class="border border-gray-300 px-2 py-1 w-full" name="height" value={Height} onChange={(e) => setHeight(e.target.value)} required />
                        </div>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">Weight (in kg)</label>
                            <input type="text" class="border border-gray-300 px-2 py-1 w-full" name="weight" value={Weight} onChange={(e) => setWeight(e.target.value)} required />
                        </div>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">Lifestyle</label>
                            <label class="flex items-center mb-2">Do you smoke?</label>
                            <input type="radio" class="mr-2" name="smoke" value="yes" required /> Yes

                            <label class="flex items-center mb-2">
                                <input type="radio" class="mr-2" name="moke" value={Smoke} required onChange={(e) => setSmoke(e.target.value)} /> No
                            </label>
                        </div>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">How many units of alcohol do you drink per week?</label>
                            <input type="text" class="border border-gray-300 px-2 py-1 w-full" name="alcohol" value={Alcohol} onChange={(e) => setAlcohol(e.target.value)} required />
                        </div>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">How would you rate your diet?</label>
                            <select class="border border-gray-300 px-2 py-1 w-full" name="diet" value={Diet} onChange={(e) => setDiet(e.target.value)} required>
                                <option value="healthy">Healthy</option>
                                <option value="moderately-healthy">Moderately healthy</option>
                                <option value="unhealthy">Unhealthy</option>
                                <option value="somewhere-in-the-middle">Somewhere in the middle</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">How many times a week do you exercise?</label>
                            <input type="text" class="border border-gray-300 px-2 py-1 w-full" name="exercise-frequency" value={Exercise} onChange={(e) => setExercise(e.target.value)} required />
                        </div>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">And how many minutes do you typically exercise?</label>
                            <input type="text" class="border border-gray-300 px-2 py-1 w-full" name="exercise-duration" value={ExerciseDuration} onChange={(e) => setExerciseDuration(e.target.value)} required />
                        </div>
                        <div class="mb-4">
                            <label class="block font-bold mb-1">Medical History</label>
                            <label class="block mb-2">
                                When did you last check your blood pressure?
                                <input type="text" class="border border-gray-300 px-2 py-1 w-full" name="blood-pressure-date" value={BloodPressure} onChange={(e) => setBloodPressure(e.target.value)} required />
                            </label>
                            <label class="block mb-2">
                                What was your last blood pressure reading (if known)? (in mmHg)
                                <input type="text" class="border border-gray-300 px-2 py-1 w-full" name="blood-pressure-reading" value={BloodPressureValue} onChange={(e) => setBloodPressureValue(e.target.value)} required />
                            </label>
                            <label class="block mb-2">
                                Please indicate any past medical issues or operations
                                <textarea class="border border-gray-300 px-2 py-1 w-full" name="medical-issues" value={MedicalIssue} onChange={(e) => setMedicalIssue(e.target.value)} rows="2" required></textarea>
                            </label>
                            <label class="block mb-2">
                                Please list any family medical conditions
                                <textarea class="border border-gray-300 px-2 py-1 w-full" name="family-medical-conditions" value={FamilyMedical} onChange={(e) => setFamilyMedical(e.target.value)} rows="2" required></textarea>
                            </label>
                            <label class="block mb-2">
                                List any medication you take (including natural remedies)
                                <textarea class="border border-gray-300 px-2 py-1 w-full" name="medication" value={Medication} onChange={(e) => setMedication(e.target.value)} rows="2" required></textarea>
                            </label>
                            <label class="block mb-2">
                                List any drug allergies you may have
                                <textarea class="border border-gray-300 px-2 py-1 w-full" name="allergies" value={Allergies} onChange={(e) => setAllergies(e.target.value)} rows="2" required></textarea>
                            </label>
                            <label class="block mb-2">
                                What are your current health concerns or goals?
                                <textarea class="border border-gray-300 px-2 py-1 w-full" name="health-concerns" value={Goals} onChange={(e) => setGoals(e.target.value)} rows="2" required></textarea>
                            </label>
                        </div>

                        <div class="mb-4">
                            <label class="block font-bold mb-1">Is there any other relevant information you'd like to share?</label>
                            <textarea class="border border-gray-300 px-2 py-1 w-full" name="additional-information" value={ExtraInformation} onChange={(e) => setExtraInformation(e.target.value)} rows="2" required></textarea>
                        </div>
                    </form>
                </div>
                <button type="submit" className='form-button' >Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
