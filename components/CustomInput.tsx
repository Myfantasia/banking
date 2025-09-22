import React from "react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import z from "zod";
import { Control, FieldPath } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string;
  type?: string; // 👈 allow passing type
  options?: { value: string; label: string }[]; 
  className?: string;// 👈 for dropdown
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  type,
  options,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-1.5">
          <FormLabel className="text-[14px] leading-[20px] font-medium text-gray-700">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              {type === "select" && options ? (
                <select
                  {...field}
                  className="text-[16px] leading-[24px] rounded-md w-full p-2 border border-gray-300 text-gray-900"
                >
                  <option value="">Select {label}</option>
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <Input
                  placeholder={placeholder}
                  {...field}
                  className="text-[16px] leading-[24px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500"
                  type={name === "password" ? "password" : "text"}
                />
              )}
            </FormControl>
            <FormMessage className="text-red-500 text-[12px] leading-[16px] mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
