import React, { useRef, useState, useCallback } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  Image,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Quote,
  Code,
  Heading2,
} from "lucide-react";

interface RichTextEditorProps {
  placeholder?: string;
  maxLength?: number;
  onPost?: (html: string) => void;
  avatar?: string;
}

const ToolbarButton = ({
  icon: Icon,
  label,
  onClick,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
  active?: boolean;
}) => (
  <button
    type="button"
    title={label}
    onClick={onClick}
    className={`p-1.5 rounded transition-colors ${
      active
        ? "bg-accent text-accent-foreground"
        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    }`}
  >
    <Icon className="h-4 w-4" />
  </button>
);

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  placeholder = "What's on your mind?",
  maxLength = 4000,
  onPost,
  avatar,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [charCount, setCharCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  }, []);

  const handleInput = useCallback(() => {
    const text = editorRef.current?.innerText || "";
    setCharCount(text.trim().length);
    setIsEmpty(text.trim().length === 0);
  }, []);

  const handlePost = useCallback(() => {
    if (!editorRef.current || isEmpty) return;
    const html = editorRef.current.innerHTML;
    onPost?.(html);
    editorRef.current.innerHTML = "";
    setCharCount(0);
    setIsEmpty(true);
  }, [isEmpty, onPost]);

  const handleInsertLink = useCallback(() => {
    const url = prompt("Enter URL:");
    if (url) execCommand("createLink", url);
  }, [execCommand]);

  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-0.5 px-3 py-2 border-b border-border flex-wrap">
        <ToolbarButton icon={Bold} label="Bold" onClick={() => execCommand("bold")} />
        <ToolbarButton icon={Italic} label="Italic" onClick={() => execCommand("italic")} />
        <ToolbarButton icon={Underline} label="Underline" onClick={() => execCommand("underline")} />
        <div className="w-px h-4 bg-border mx-1" />
        <ToolbarButton icon={Heading2} label="Heading" onClick={() => execCommand("formatBlock", "h3")} />
        <ToolbarButton icon={Quote} label="Quote" onClick={() => execCommand("formatBlock", "blockquote")} />
        <ToolbarButton icon={Code} label="Code" onClick={() => execCommand("formatBlock", "pre")} />
        <div className="w-px h-4 bg-border mx-1" />
        <ToolbarButton icon={List} label="Bullet List" onClick={() => execCommand("insertUnorderedList")} />
        <ToolbarButton icon={ListOrdered} label="Numbered List" onClick={() => execCommand("insertOrderedList")} />
        <div className="w-px h-4 bg-border mx-1" />
        <ToolbarButton icon={AlignLeft} label="Align Left" onClick={() => execCommand("justifyLeft")} />
        <ToolbarButton icon={AlignCenter} label="Align Center" onClick={() => execCommand("justifyCenter")} />
        <ToolbarButton icon={AlignRight} label="Align Right" onClick={() => execCommand("justifyRight")} />
        <div className="w-px h-4 bg-border mx-1" />
        <ToolbarButton icon={Link} label="Insert Link" onClick={handleInsertLink} />
        <ToolbarButton icon={Image} label="Insert Image" onClick={() => {}} />
      </div>

      {/* Editor area */}
      <div className="flex items-start gap-3 p-4">
        {avatar && (
          <img src={avatar} alt="" className="h-8 w-8 rounded-full object-cover shrink-0 mt-0.5" />
        )}
        <div className="flex-1 min-w-0">
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            data-placeholder={placeholder}
            className="min-h-[120px] max-h-[300px] overflow-y-auto text-sm text-foreground leading-relaxed outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mb-1 [&_blockquote]:border-l-2 [&_blockquote]:border-muted-foreground [&_blockquote]:pl-3 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_pre]:bg-muted [&_pre]:rounded [&_pre]:p-2 [&_pre]:text-xs [&_pre]:font-mono [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-border">
        <div className="flex items-center gap-4">
          <button className="text-xs text-muted-foreground flex items-center gap-1.5 hover:text-foreground transition-colors">
            📷 <span>Media</span>
          </button>
          <button className="text-xs text-muted-foreground flex items-center gap-1.5 hover:text-foreground transition-colors">
            📎 <span>Attach</span>
          </button>
          <button className="text-xs text-muted-foreground flex items-center gap-1.5 hover:text-foreground transition-colors">
            📊 <span>Poll</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">{charCount}/{maxLength}</span>
          <button
            onClick={handlePost}
            disabled={isEmpty}
            className="px-4 py-1.5 text-sm font-semibold bg-foreground text-background rounded-md disabled:opacity-40 transition-opacity"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
