export const business = {
  brand: "Nestly",
  tagline: "Simple things for an organized everyday life.",
  primaryDomain: "mynestly.com",
  currentDomain: "nestly.blinto.co",
  model: "Branded dropshipping",
  platform: "Shopify",
  milestone: 100,
};

export const stats = [
  { label: "Orders", value: "0", meta: "Goal: 100" },
  { label: "Revenue", value: "$0", meta: "Launch stage" },
  { label: "Active products", value: "0", meta: "Target: 8–12" },
  { label: "Experiments", value: "0", meta: "Merchant-led" },
];

export const focus = [
  { title: "Finalize launch products", owner: "Product", status: "Now" },
  { title: "Validate suppliers", owner: "Operations", status: "Now" },
  { title: "Prepare launch marketing", owner: "Growth", status: "Next" },
  { title: "Start merchant app testing", owner: "Blinto Reviews", status: "Next" },
];

export const products = [
  { name: "Foldable Laptop Stand", role: "Hero", status: "Researching", targetPrice: "$39", margin: "TBD" },
  { name: "Magnetic Cable Organizer", role: "Add-on", status: "Researching", targetPrice: "$12", margin: "TBD" },
  { name: "Tech Organizer Pouch", role: "Complementary", status: "Researching", targetPrice: "$24", margin: "TBD" },
  { name: "Desk Mat", role: "Complementary", status: "Backlog", targetPrice: "$29", margin: "TBD" },
  { name: "Laptop Cleaning Kit", role: "Add-on", status: "Backlog", targetPrice: "$15", margin: "TBD" },
];

export const suppliers = [
  { name: "CJdropshipping", type: "Platform", status: "To validate", shipping: "TBD", score: "—" },
  { name: "DSers / AliExpress", type: "Platform", status: "To validate", shipping: "TBD", score: "—" },
];

export const experiments = [
  {
    name: "Post-purchase upsell",
    problem: "AOV below target",
    hypothesis: "Relevant add-ons can raise AOV without hurting conversion.",
    status: "Backlog",
    metric: "AOV",
  },
  {
    name: "Product review app",
    problem: "No social proof",
    hypothesis: "Verified reviews will improve trust and product-page conversion.",
    status: "Backlog",
    metric: "Conversion rate",
  },
];

export const marketing = [
  { channel: "Organic social", objective: "Early awareness + product discovery", status: "Planning" },
  { channel: "SEO", objective: "Long-term non-paid acquisition", status: "Planning" },
  { channel: "Email", objective: "Abandoned checkout + retention", status: "Planning" },
  { channel: "Paid ads", objective: "Validate hero-product demand", status: "Later" },
];

export const decisions = [
  {
    date: "2026-09-23",
    title: "Operate Nestly as a real merchant business",
    decision: "Nestly will be a real branded dropshipping store, not a demo store.",
    reason: "Blinto needs first-hand merchant pain, app-testing evidence, and a revenue-generating commerce business.",
  },
  {
    date: "2026-09-23",
    title: "Separate storefront and operating system",
    decision: "Shopify runs the customer-facing store; nestly-ops runs the business knowledge layer.",
    reason: "Keep commerce execution separate from research, decisions, experiments, and internal operating data.",
  },
];
