import "./Directory.css";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface SubItem {
  name: string;
  link: string;
}

interface DirectoryItem {
  name: string;
  icon: JSX.Element;
  subs: SubItem[];
  link?: string;
}

interface DirectoryViewProps {
  directory: DirectoryItem[];
  singleView?: boolean;
}

const Directory: React.FC<DirectoryViewProps> = ({
  directory,
  singleView = false,
}) => {
  const navigate = useNavigate();

  const handleClick = (item: DirectoryItem) => {
    if (item.subs.length > 0 || !item.link || item.link === "") {
      toast("Action Triggered");
      return;
    }
    console.log(item.link);
    navigate(item.link);
  };
  const renderDirectory = (items: DirectoryItem[]) => {
    return (
      <Accordion.Root type={singleView ? "single" : "multiple"}>
        {items.map((item) => (
          <Accordion.Item key={item.name} value={item.name}>
            <Accordion.Trigger
              className="directory-folder"
              data-dir-active={
                item.link && useLocation().pathname.includes(item.link)
                  ? "true"
                  : "false"
              }
              onClick={() => handleClick(item)}
            >
              <div className="directory-chevron-wrapper">
                {item.subs.length > 0 && <ChevronRight size={14} />}
              </div>
              <div>{item.icon}</div>
              {item.name}
            </Accordion.Trigger>
            <Accordion.Content className="directory-content">
              {item.subs.map((sub) => (
                <button key={sub.name} className="directory-folder">
                  {sub.name}
                </button>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    );
  };

  return <div className="directory-root">{renderDirectory(directory)}</div>;
};

export default Directory;
