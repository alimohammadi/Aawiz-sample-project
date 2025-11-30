"use client";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, InputProps } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/global/header";

interface FormDataItemProps extends Omit<InputProps, "name"> {
  name: keyof FormType;
  hookFormKey: keyof FormType;
}

const formData: FormDataItemProps[] = [
  {
    hookFormKey: "age",
    type: "text",
    placeholder: "Ali Mohammadi",
    name: "age",
  },
  {
    hookFormKey: "email",
    type: "email",
    placeholder: "Ali Mohammadi",
    name: "email",
  },
  {
    hookFormKey: "fullName",
    type: "text",
    placeholder: "Ali Mohammadi",
    name: "fullName",
  },
];

// ----- Validation Schema -----
const FormSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  age: z.string().refine((val) => Number(val) >= 18, "You must be 18+"),
});

type FormType = z.infer<typeof FormSchema>;

interface FormProps {
  fullName: string;
  email: string;
  age: number;
}

export default function FormExamplePage() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
  });

  const [data, setData] = useState<FormProps>({
    age: 0,
    email: "",
    fullName: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <section>
      <Header />
      <div className="max-w-md md:mx-auto mt-10 p-6 border rounded-xl shadow-md mx-4">
        <h1 className="text-2xl font-bold mb-6">Form with Validation</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {formData.map((item) => (
            <Controller
              key={item.hookFormKey}
              name={item.hookFormKey}
              control={control}
              render={({ field }) => (
                <Input
                  {...item}
                  {...field} // gives value, onChange, onBlur
                  onChange={onChange}
                  errorMsg={errors[item.hookFormKey]?.message}
                />
              )}
            />
          ))}

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
}
