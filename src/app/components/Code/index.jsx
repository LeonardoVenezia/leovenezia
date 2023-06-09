'use client';
import codes from "@/app/code";

import { CopyBlock, atomOneLight } from "react-code-blocks";

const Code = ({code}) => {
    return (
        <CopyBlock
            text={codes[code]}
            language="javascript"
            // showLineNumbers
            // startingLineNumber={0}
            wrapLines
            theme={atomOneLight}
        />
    );
}

export default Code;
