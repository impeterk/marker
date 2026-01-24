export function colorParser(html: string, selector: keyof CSSStyleDeclaration) {
	const parser = new DOMParser();
	const document = parser.parseFromString(html, 'text/html');
	const shikiEl = document.querySelector('.shiki') as HTMLPreElement;
	if (!shikiEl) {
		return '';
	}
	return shikiEl.style[selector] as string;
}
