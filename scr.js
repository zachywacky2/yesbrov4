        document.addEventListener("DOMContentLoaded", function() {
            function addCSS(cssText) {
                var styleElement = document.createElement("style");
                styleElement.type = "text/css";
                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = cssText;
                } else {
                    styleElement.appendChild(document.createTextNode(cssText));
                }
                document.getElementsByTagName("head")[0].appendChild(styleElement);
            }

            addCSS(`
                #button {
                    display: none;
                }
                .imgb_vis {
                    animation: imgb-animation 7s linear;
                }
                @keyframes imgb-animation {
                    10% {
                        transform: translateX(0);
                    }
                    20% {
                        transform: translateX(100px);
                    }
                    90% {
                        transform: translateX(100px);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `);

            var buttonElement = document.createElement("div");
            buttonElement.id = "button";
            buttonElement.className = "imgb";
            buttonElement.style = "position: fixed; top: 10%; left: -100px; z-index: 10;";
            buttonElement.innerHTML = `
                <a target="_blank" href="https://glacierarcade.win" title="More of best Glacier Arcade Unblocked Games">
                    <img src="https://cdn.jsdelivr.net/gh/zachywacky2/yesbrov3@main/scr.png" width="100" height="20" style="cursor: pointer;" alt="More Unblocked Games">
                </a>
            `;
            document.body.appendChild(buttonElement);

            var button = document.getElementById("button");
            var toggle = 0;
            var displayStates = ["block", "none"];
            var intervals = [7000, 7000];

            function toggleButton() {
                toggle ^= 1;
                button.style.display = displayStates[toggle];
                setTimeout(toggleButton, intervals[toggle]);
            }

            toggleButton();

            document.querySelector(".imgb").classList.add("imgb_vis");
        });
