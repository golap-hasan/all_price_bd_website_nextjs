"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image as ImageIcon, Paperclip, Smile, Send } from "lucide-react";

type Props = {
  input: string;
  setInput: (v: string) => void;
  onSend: () => void;
  onPickImage: () => void;
  fileInput: React.RefObject<HTMLInputElement | null>;
  onFileChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Composer({ input, setInput, onSend, onPickImage, fileInput, onFileChange }: Props) {
  return (
    <div className="border-t p-3">
      <div className="flex items-end gap-2">
        <Button variant="outline" size="icon" className="h-10 w-10">
          <Paperclip className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="h-10 w-10" onClick={onPickImage}>
          <ImageIcon className="h-4 w-4" />
        </Button>
        <div className="relative flex-1">
          <Textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a message"
            className="w-full resize-none pr-10"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSend();
              }
            }}
          />
          <Button aria-label="emoji" variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8">
            <Smile className="h-4 w-4" />
          </Button>
        </div>
        <Button onClick={onSend} className="inline-flex items-center gap-2">
          <Send className="h-4 w-4" /> Send
        </Button>
      </div>
      <input ref={fileInput} type="file" accept="image/*" className="hidden" onChange={onFileChange} />
    </div>
  );
}
