export function setArgs(node: Node, args: any) {
    const nodeELm = (node as Element);

    const attributes = Object.keys(args);

    if (attributes) {
        attributes.forEach((att) => {
            nodeELm.setAttribute(att, args[att]);
        });
    }
}