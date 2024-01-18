//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
      const changeColorButton = document.getElementById("change_button");
      const resetButton = document.getElementById("reset_button");
      const blockIdInput = document.getElementById("block_id");
      const colorInput = document.getElementById("colour_id");
      const gridItems = document.querySelectorAll(".grid-item");

      changeColorButton.addEventListener("click", function () {
        const blockId = blockIdInput.value;
        const color = colorInput.value;

        // Reset background color for all grid items to transparent
        gridItems.forEach(item => {
          item.style.backgroundColor = "transparent";
        });

        // Change the background color of the specified block ID
        const targetBlock = document.getElementById(blockId);
        if (targetBlock) {
          targetBlock.style.backgroundColor = color;
        }
      });

      resetButton.addEventListener("click", function () {
        // Reset background color for all grid items to transparent
        gridItems.forEach(item => {
          item.style.backgroundColor = "transparent";
        });
      });
    });