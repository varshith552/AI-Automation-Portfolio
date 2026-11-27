const VALID = ["JOB_OPPORTUNITY", "INTERVIEW", "PROMOTIONAL", "GENERAL"];

let cat = $json.category;
let reason = $json.reason || "";

const text = (($json.subject || "") + " " + ($json.body || "")).toLowerCase();

// Bad or missing model output: do not label
if (!VALID.includes(cat)) {
  return {
    json: {
      ...$json,
      category: "REVIEW",
      reason: "invalid or missing model output"
    }
  };
}

// No email text available: leave the model answer unchanged
if (!text.trim()) return { json: $json };

const saleWords = /(\d+\s?%\s?off|promo code|coupon|use code|enroll (now|today)|limited[- ]time offer|buy \d+ get \d+)/.test(text);

const marketing = /(use code|enroll|shop now|unsubscribe|limited[- ]time|buy \d+ get \d+)/.test(text);

const transactional = /(order\s*#?\s*\d+|order (is )?confirmed|invoice|receipt|total paid|estimated delivery|tracking|payment (received|successful))/.test(text);

const invite = /(invite|invited|inviting|schedule[d]?|confirm|availability|shortlisted)/.test(text);

if (transactional && !marketing) {
  cat = "GENERAL";
  reason = "Order or receipt email";
} else if (saleWords && cat !== "PROMOTIONAL") {
  cat = "PROMOTIONAL";
  reason = "Contains sale wording (discount/code/enroll)";
} else if (cat === "INTERVIEW" && !(text.includes("interview") && invite)) {
  cat = "GENERAL";
  reason = "No interview invitation wording found";
}

return {
  json: {
    ...$json,
    category: cat,
    reason
  }
};
