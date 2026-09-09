/** Only protect a selection that overlaps this surface, not unrelated page text. */
export function hasSelectedTextWithin(element: Element | null): boolean {
  if (!element) return false;
  const selection = element.ownerDocument.getSelection();
  if (!selection || selection.isCollapsed || !selection.toString().trim()) {
    return false;
  }
  for (let index = 0; index < selection.rangeCount; index += 1) {
    if (selection.getRangeAt(index).intersectsNode(element)) return true;
  }
  return false;
}
