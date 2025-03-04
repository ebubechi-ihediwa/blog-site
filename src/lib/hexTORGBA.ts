export function hexToRGBA(hex:string, alpha = 0.3) {
    // Remove the '#' if present
    hex = hex.replace("#", "");
    // Parse the r, g, b values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  