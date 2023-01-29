export function maskInputCEP(event: Event) {
  const target = event.target as HTMLInputElement;
  const inputEvent = event as InputEvent;

  if (!inputEvent.inputType.includes("deleteContent")) {
    if (target && typeof target.value === "string") {
      if (target.value.length === 5) target.value += "-";
    }
  }
}
