import { useEffect } from "react";

export default function WatsonChat() {
    useEffect(() => {
        if (!document.getElementById("watson-script")) {
            (window as any).watsonAssistantChatOptions = {
                integrationID: "949ab6c8-5ead-4f01-b875-bcf3b5363c72",
                region: "us-south",
                serviceInstanceID: "5ff36946-1ec7-434e-8572-b1f04d3af74a",
                onLoad: async (instance: { render: () => Promise<void> }) => {
                    await instance.render();
                }
            };

            const script = document.createElement('script');
            script.id = "watson-script";
            script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
                (window as any).watsonAssistantChatOptions.clientVersion || 'latest'
            }/WatsonAssistantChatEntry.js`;
            document.head.appendChild(script);
        }

        return () => {
            const script = document.getElementById("watson-script");
            if (script) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return null;
}
