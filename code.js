function isSameName(node) {
  let savedName = figma.currentPage.selection[0].name;
  return node.name === savedName;
}

function main() {
  if (figma.currentPage.selection.length !== 1) {
    figma.closePlugin("Select only one object")
    return;
  }

  let nodes = figma.currentPage.findAll(isSameName);
  figma.currentPage.selection = nodes;

  figma.closePlugin("Objects selected")
}

main();
