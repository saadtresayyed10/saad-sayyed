"use client";

import Link from "next/link";
import Headings from "./Headings";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [thread, setThread] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast({
        title: "Cannot send message...",
        description: "Email and message are required.",
        variant: "destructive",
      });
      return;
    }

    if (!thread.trim()) {
      toast({
        title: "Cannot send message...",
        description: "Email and message are required.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:3000/api/contact", {
        email: email,
        thread: thread,
      });

      toast({
        title: "Message sent!",
        description: "Saad will respond back to you within 24 hours.",
      });
      setEmail("");
      setThread("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col bg-neutral-900 w-full text-white font-unbounded lg:px-20 px-8">
      <Headings title="" />
      <div className="flex lg:justify-between justify-center lg:flex-row flex-col gap-y-10 items-center w-full pt-20">
        <h1 className="lg:text-6xl text-4xl capitalize tracking-wide">
          Let&apos;s collaborate
        </h1>
        <Link
          href="mailto:saadsyed950@gmail.com"
          className="lg:block hidden relative border-violet-500 border-opacity-50 lg:border-b-2 pb-1 lg:text-2xl text-lg after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-500 hover:after:w-full"
        >
          saadsyed950@gmail.com
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-start items-start flex-col gap-y-4 lg:mt-16 mt-10 w-full"
      >
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-4 pr-8 py-2 bg-transparent border border-violet-500 rounded-full lg:w-[23%] w-[95%]"
        />
        <textarea
          placeholder="Enter Message"
          rows={6}
          value={thread}
          onChange={(e) => setThread(e.target.value)}
          className="pl-4 pr-8 py-4 bg-transparent border border-violet-500 rounded-lg lg:w-[23%] w-[95%]"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-violet-500 text-black uppercase font-normal rounded-full lg:text-sm text-xs"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
