"use client"
import React, { LegacyRef, useEffect, useRef, useState } from "react";
// import { PdfViewer } from "./PdfViewer";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { CanvasWrapper } from "../canvas/CanvasWrapper"
// import { PDFViewerComponent } from "../Test";
import { PdfViewerComponent } from "./pdfViewerTest";

import { useSettings } from "@/context/SettingsContext";
import CurrentPageListner from "./CurrentPageListner";
import { useToolContext } from "@/context/ToolContext";
import ExcalidrawComponent from "../canvas/excalidraw/ExcalidrawComponent";
interface PdfHighlighterProps {
    pdfDocument: PDFDocumentProxy;
    pdfScaleValue?: number;
}

export const PdfHighlighter: React.FC<PdfHighlighterProps> = ({
    pdfDocument,
    pdfScaleValue = 1,
}) => {
    const [isDrawing, setIsDrawing] = useState(true);
    const [pageRects, setPageRects] = useState<DOMRect[]>([]);
    const containerNodeRef = useRef<HTMLDivElement>(null);  // Fixed ref type
    const contentRef = useRef<HTMLDivElement>(null);  // Fixed ref type
    const [isZoomEnable, setIsZoomEnable] = useState(true);




    return (
        <div
            className=" scrollbar-hide"
            id="pdf-container"
            style={{
                width: '100%',
            }}
        >
            <div ref={contentRef} className="h-full bg-black">
                <CurrentPageListner/>
                <PdfViewerComponent
                    pdfDocument={pdfDocument}
                    onPagesRendered={setPageRects}
                    pdfScaleValue={pdfScaleValue}
                    containerNodeRef={containerNodeRef}
                    isZoomEnable={isZoomEnable}
                />
               

                <CanvasWrapper pageRects={pageRects} isDrawing={isDrawing} containerNodeRef={containerNodeRef} type="pdf" />
            </div>
        </div>
    );
};


{/* <PDFViewerComponent pdfDocument={pdfDocument}/> */ }
{/* <PdfViewerComponent
                pdfDocument={pdfDocument}
                onPagesRendered={setPageRects}
            /> */}