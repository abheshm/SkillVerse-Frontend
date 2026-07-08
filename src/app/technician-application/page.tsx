"use client";

import { useState } from "react";
import { createTechnicianApplication } from "@/services/technicianApplicationService";

export default function TechnicianApplicationPage() {

    const [formData, setFormData] = useState({
        full_name: "",
        skill: "",
        experience: "",
        availability: true
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement
        >
    ) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            const payload = {

                full_name:
                    formData.full_name,

                skill:
                    formData.skill,

                experience:
                    formData.experience,

                availability:
                    formData.availability

            };


            const response =
                await createTechnicianApplication(
                    payload
                );


            console.log(response);


            alert(
                "Application submitted successfully"
            );


        } catch (error) {

            console.error(error);


            alert(
                "Application submission failed"
            );

        }

    };

    return (

        <div
            style={{
                maxWidth: "600px",
                margin: "40px auto",
                padding: "20px"
            }}
        >

            <h1>
                Technician Verification
            </h1>

            <form
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="full_name"
                    placeholder="Full Name"
                    value={formData.full_name}
                    onChange={handleChange}
                />

                <br />
                <br />

                <input
                    type="text"
                    name="skill"
                    placeholder="Skill"
                    value={formData.skill}
                    onChange={handleChange}
                />

                <br />
                <br />

                <input
                    type="text"
                    name="experience"
                    placeholder="Experience"
                    value={formData.experience}
                    onChange={handleChange}
                />

                <br />
                <br />

                <button
                    type="submit"
                >
                    Submit Application
                </button>

            </form>

        </div>
    );
}