export function toggleClass(classElement: string, newClassToggle: string) {
    const element = document.getElementsByClassName(classElement)
    element[0].classList.toggle(newClassToggle)
}