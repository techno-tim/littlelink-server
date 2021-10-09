export function trackEvent(action, category, label, value) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}
