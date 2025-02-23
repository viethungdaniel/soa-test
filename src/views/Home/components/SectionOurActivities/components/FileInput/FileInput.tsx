import FormatAttachmentOutlined from "@@/public/images/icons/format-attachment-outlined.svg";
import AppButton from "@/components/AppButton";
import AppSvgIcon from "@/components/AppSvgIcon";

import { useTranslation } from "next-i18next";
import { useMemo, useRef } from "react";

import useStyles from "./FileInput.styles";

type FileInputProps = {
  name: string;
  value: any;
  onChange?: (event: {
    target: {
      name: string;
      value: any;
    };
  }) => void;
};

const FileInput = (props: FileInputProps) => {
  const { name, value, onChange } = props;

  const inputRef = useRef<HTMLInputElement>(null!);

  const { classes } = useStyles();

  const { t } = useTranslation();

  const filePreview = useMemo(() => {
    return value?.name || "";
  }, [value]);

  const handleFileChange: React.ChangeEventHandler<
    HTMLInputElement & EventTarget
  > = (event) => {
    const files = Array.from(event.target.files!);
    onChange &&
      onChange({
        target: {
          name: name || "",
          value: files[0],
        },
      });
    event.target.value = "";
  };

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={classes.root}>
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        className={classes.input}
        accept=".pdf"
      />

      <AppButton
        startIcon={
          <AppSvgIcon
            fontSize="inherit"
            color="inherit"
            component={FormatAttachmentOutlined}
          />
        }
        color="info.main"
        onClick={handleUploadClick}
      >
        {filePreview || t("upload")}
      </AppButton>
    </div>
  );
};

export default FileInput;
