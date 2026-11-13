import type { RevealApi } from "reveal.js";

/** Runs after Markdown and before Highlight and Reveal's print layout. */
export default {
  id: "mermaid",
  async init(deck: RevealApi) {
    const root = deck.getRevealElement();
    if (!root) return;
    const blocks = Array.from(
      root.querySelectorAll<HTMLElement>(
        "pre > code.mermaid, pre > code.language-mermaid",
      ),
    );
    if (!blocks.length) return;

    const showError = (code: HTMLElement, error: unknown) => {
      code.classList.add("nohighlight");
      const message = document.createElement("p");
      message.className = "mermaid-error";
      message.textContent = "Mermaid 圖表無法顯示，請檢查下方語法。";
      code.parentElement?.before(message);
      console.error("Mermaid rendering failed:", error);
    };

    // Hidden slides have no useful dimensions. Measure in a visible-layout,
    // offscreen container instead, without making all slides visible.
    const stage = document.createElement("div");
    stage.className = "mermaid-render-stage";
    stage.setAttribute("aria-hidden", "true");
    document.body.append(stage);

    try {
      const { default: mermaid } = await import("mermaid");
      const fontFamily = getComputedStyle(root).fontFamily;
      await document.fonts.load(`24px ${fontFamily}`);
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        suppressErrorRendering: true,
        theme: "base",
        fontFamily,
        themeVariables: {
          darkMode: true,
          background: "#1e1e2e",
          primaryColor: "#313244",
          primaryTextColor: "#cdd6f4",
          primaryBorderColor: "#b4befe",
          secondaryColor: "#45475a",
          tertiaryColor: "#181825",
          lineColor: "#bac2de",
          textColor: "#cdd6f4",
          mainBkg: "#313244",
          nodeBorder: "#b4befe",
          clusterBkg: "#181825",
          clusterBorder: "#585b70",
          edgeLabelBackground: "#1e1e2e",
          actorBkg: "#313244",
          actorBorder: "#b4befe",
          actorTextColor: "#cdd6f4",
          actorLineColor: "#bac2de",
          signalColor: "#cdd6f4",
          signalTextColor: "#cdd6f4",
          noteBkgColor: "#313244",
          noteTextColor: "#cdd6f4",
          noteBorderColor: "#b4befe",
          fontSize: "22px",
        },
        flowchart: { htmlLabels: false, useMaxWidth: false },
        sequence: { useMaxWidth: false, mirrorActors: false },
      });

      for (const [index, code] of blocks.entries()) {
        const pre = code.parentElement!;
        try {
          const { svg } = await mermaid.render(
            `slide-mermaid-${index}`,
            code.textContent ?? "",
            stage,
          );
          const figure = document.createElement("figure");
          // Preserve Reveal fragments and data attributes attached to the fence.
          for (const { name, value } of Array.from(pre.attributes)) {
            figure.setAttribute(name, value);
          }
          figure.classList.add("mermaid-diagram");
          figure.innerHTML = svg;
          pre.replaceWith(figure);
        } catch (error) {
          showError(code, error);
        } finally {
          stage.replaceChildren();
        }
      }
    } catch (error) {
      blocks.forEach((code) => showError(code, error));
    } finally {
      stage.remove();
    }
  },
};
