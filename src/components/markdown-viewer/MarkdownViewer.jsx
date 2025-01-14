import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism"; // Use a lighter theme
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeMathJax from "rehype-mathjax";

const MarkdownViewer = ({ url }) => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await axios.get(url);
        setMarkdown(response.data);
      } catch (error) {
        console.error("Error fetching the Markdown:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [url]);

  return (
    <div
      className="prose max-w-full my-5"
      style={{ color: "black" }} // Global styles for black text and justified alignment
    >
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <svg
            className="animate-spin h-8 w-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      ) : (
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeMathJax]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  style={vs}
                  customStyle={{
                    fontSize: "0.9rem",
                    margin: "0",
                    border: "none",
                    background: "none",
                    overflowX: "auto",
                    color: "black", // Force code block text to be black
                    textAlign: "left", // Prevent code blocks from being justified
                  }}
                  codeTagProps={{
                    style: { padding: "0", margin: "0", border: "none" },
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  className={`${className || ""}`}
                  style={{ color: "black", textAlign: "left" }} // Inline code should not be justified
                  {...props}
                >
                  {children}
                </code>
              );
            },
            h1({ node, ...props }) {
              return (
                <h1
                  className="text-4xl font-bold"
                  style={{ color: "black" }}
                  {...props}
                />
              );
            },
            h2({ node, ...props }) {
              return (
                <h2
                  className="text-3xl font-semibold"
                  style={{ color: "black" }}
                  {...props}
                />
              );
            },
            h3({ node, ...props }) {
              return (
                <h3
                  className="text-2xl font-medium"
                  style={{ color: "black" }}
                  {...props}
                />
              );
            },
            h4({ node, ...props }) {
              return (
                <h4
                  className="text-xl font-medium"
                  style={{ color: "black" }}
                  {...props}
                />
              );
            },
            h5({ node, ...props }) {
              return (
                <h5
                  className="text-lg font-medium"
                  style={{ color: "black" }}
                  {...props}
                />
              );
            },
            h6({ node, ...props }) {
              return (
                <h6
                  className="text-md font-medium"
                  style={{ color: "black" }}
                  {...props}
                />
              );
            },
            p({ node, ...props }) {
              return (
                <p
                  style={{ color: "black", textAlign: "justify" }}
                  {...props}
                />
              );
            },
            span({ node, ...props }) {
              return (
                <span
                  style={{ color: "black", textAlign: "justify" }}
                  {...props}
                />
              );
            },
            a({ node, ...props }) {
              return (
                <a
                  style={{ color: "black", textAlign: "justify" }}
                  {...props}
                />
              );
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default MarkdownViewer;
