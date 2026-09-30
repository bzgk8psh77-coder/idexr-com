import{i as e,n as t,t as n}from"./jsx-runtime-Cltr0gcK.js";import{t as r}from"./link-CY_3yKXA.js";import{a as i}from"./matchContext-BNcrmMbK.js";import{t as a}from"./check-jhRFWvz6.js";import{a as o,i as s,n as c,o as l,r as u,t as d,u as f}from"./index-Bqyacz5t.js";import{t as p}from"./shell-B6CG0_3T.js";import{a as m,i as h,n as g,r as _,t as v}from"./states-cOjfHvFQ.js";var y=f(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),b=f(`download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),x=f(`printer`,[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]),S=e(t(),1),C=e=>({kit:e,yourName:``,yourAddress:``,yourEmail:``,yourPhone:``,today:new Date().toISOString().slice(0,10),facts:``,state:`CA`,landlordName:``,landlordAddress:``,propertyAddress:``,moveIn:``,moveOut:``,depositAmount:``,returnedAmount:`0`,forwarding:``,side:`consumer`,reasonCode:`13.1`,amount:``,txnDate:``,disputeRef:``,merchantName:``,lastFour:``,goods:``,platform:`Amazon`,accountId:``,caseId:``,freezeDate:``,whatHappened:``,ask:``,line:`Health`,insurer:``,policyNo:``,claimNo:``,denialDate:``,denialReason:``,dateOfLoss:``}),w=`IDEXR is not a law firm, insurer, bank, or marketplace. This packet is a structured draft generated from the facts you entered and publicly cited rules. It is not legal, insurance, or financial advice. Deadlines and statutes change. Confirm the current text of any statute, card-network rule, or policy before you send or file. You remain responsible for what you sign and send.`;function T(e){let t=Number(String(e).replace(/[^0-9.-]/g,``));return Number.isFinite(t)?t:0}function E(e){return e.yourName.trim()||`[Your name]`}function D(e){return e.kit===`deposit`?O(e):e.kit===`chargeback`?k(e):e.kit===`marketplace`?A(e):j(e)}function O(e){let t=h(e.state),n=T(e.depositAmount),r=T(e.returnedAmount),i=Math.max(0,n-r),a=e.moveOut&&t?g(e.moveOut,t.days):``,o=e.today?g(e.today,14):``,s=`${e.yourAddress||`[Your address]`}
${e.yourEmail||``}
${e.yourPhone||``}

${_(e.today)}

${e.landlordName||`[Landlord / property manager]`}
${e.landlordAddress||`[Landlord address]`}

Re: Demand for return of security deposit — ${e.propertyAddress||`[rental address]`}

Dear ${e.landlordName||`[Landlord]`}:

I vacated the premises at ${e.propertyAddress||`[rental address]`} on ${_(e.moveOut)}. I paid a security deposit of ${m(n)} on or about ${_(e.moveIn)}. To date, ${r>0?`only ${m(r)} has been returned`:`no portion of the deposit has been returned`}. The remaining balance is ${m(i)}.

Under ${t?.statute??`the applicable security-deposit statute`}, a landlord in ${t?.name??e.state} generally must return the deposit, or provide a written itemization of lawful deductions, within ${t?.days??`the statutory`} days. ${t?.daysNote??``} The statutory window in this matter ran on or about ${_(a)}.

${e.facts.trim()?`Additional facts:\n${e.facts.trim()}\n\n`:``}I demand payment of ${m(i)} to me at the forwarding address below within fourteen (14) days of this letter, by ${_(o)}. ${t?.penalty?`Please take notice: ${t.penalty}`:``}

If the amount is not received by that date I intend to pursue all remedies available, including an action in small-claims court, and to seek any statutory damages, costs, and fees the law allows. This letter is written to create a clear record. It is not a waiver of any right.

Forwarding address:
${e.forwarding||e.yourAddress||`[Forwarding address]`}

Please govern yourselves accordingly.

Sincerely,

${E(e)}
`;return{title:`Security deposit demand`,subject:`Demand for return of security deposit — ${e.propertyAddress||`rental`}`,letter:s.trim(),checklist:[`Copy of the lease and any move-in checklist`,`Proof the deposit was paid (receipt, cancelled check, ledger)`,`Move-out date proof (keys returned, walkthrough, emails)`,`Photos or video of the unit on move-out day, with timestamps if you have them`,`Any itemized deduction list the landlord sent — mark what you dispute`,`Forwarding address in writing (email + this letter)`,`Two printed copies of this letter`,`USPS Certified Mail, Return Receipt Requested — keep the green card or tracking`],deadlines:[{label:`Statutory return window`,date:_(a),note:t?`${t.days} days after move-out under ${t.statute}`:`Select a state`},{label:`Your demand deadline`,date:_(o),note:`Fourteen days from the date of this letter — a clear, court-friendly ask.`}],mailing:[`Print two copies. Sign in ink.`,`Mail one copy Certified Mail with Return Receipt. Keep the other with the tracking sticker.`,`Email a PDF the same day so there is a timestamped copy. Email is a supplement, not a substitute.`,`Do not threaten criminal charges. Stick to the statute and the money.`],disclaimer:w}}function k(e){let t=m(T(e.amount)),n=e.merchantName||`[Merchant]`,r=e.side===`merchant`,i=r?`${n}
Merchant ID / account: ${e.accountId||`[MID]`}
Dispute reference: ${e.disputeRef||`[reference]`}

${_(e.today)}

Chargeback review team

Re: Representment — ${e.reasonCode||`reason code`} — ${t} on ${_(e.txnDate)} — card ending ${e.lastFour||`XXXX`}

We respectfully dispute chargeback ${e.disputeRef||`[reference]`} in the amount of ${t}, processed on ${_(e.txnDate)}, reason code ${e.reasonCode||`[code]`}.

Transaction: ${e.goods||`[description of goods or services]`}

Our position, matched to the reason code:
1. The transaction was processed as described above.
2. Compelling evidence is attached and labeled as exhibits.
${e.facts.trim()?`3. Additional facts:\n${e.facts.trim()}`:`3. Additional facts are set out in the exhibits.`}

Exhibit index (attach in this order):
A. Transaction receipt / order record
B. Authorization / AVS / CVV result (if card-absent)
C. Proof of delivery or proof of service (tracking, signed receipt, IP log, usage log)
D. Customer communications
E. Refund policy as presented at checkout
F. Any prior refund or credit already issued

We ask that the chargeback be reversed and the ${t} returned to the merchant account.

Respectfully,

${E(e)}
${e.yourEmail||``}
${e.yourPhone||``}
`:`${e.yourAddress||`[Your address]`}
${e.yourEmail||``}

${_(e.today)}

Card issuer — disputes

Re: Dispute of charge ${t} on ${_(e.txnDate)} — ${n} — card ending ${e.lastFour||`XXXX`}

I dispute the charge described above. Reason: ${e.reasonCode||`unauthorized or not as described`}.

What I purchased or was billed for: ${e.goods||`[description]`}

${e.facts.trim()||`I did not receive the goods or services as billed, or I did not authorize the charge. I ask that you investigate and reverse it.`}

I request a provisional credit while you investigate, and a written outcome. I am enclosing:
A. Statement page showing the charge
B. Order confirmation or lack of confirmation
C. Messages with the merchant
D. Any police or fraud report number, if this is unauthorized use

Sincerely,

${E(e)}
`;return{title:r?`Chargeback representment`:`Cardholder dispute`,subject:`${r?`Representment`:`Dispute`} — ${e.reasonCode} — ${t}`,letter:i.trim(),checklist:r?[`Match every sentence to the reason code. Reviewers skim.`,`Delivery proof that names this order, not a batch screenshot`,`Checkout screenshot of the refund policy the cardholder saw`,`CVV/AVS and 3-D Secure results if the code is fraud`,`Customer email/chat showing they received or used the goods`,`Do not ship a novel. Ten pages of labeled exhibits beat forty unlabeled.`]:[`Statement highlighting the charge`,`What you expected vs what arrived`,`Every message with the merchant, dates visible`,`If unauthorized: affidavit and freeze the card`,`File inside the issuer’s window (often 60–120 days from posting)`],deadlines:[{label:`Network / issuer window`,date:`See your notice`,note:`Merchant representment windows are short — often 7–30 days from the chargeback date. Do not wait.`},{label:`Draft dated`,date:_(e.today),note:`Send the same day you finish the exhibits.`}],mailing:r?[`Upload through the acquirer dashboard and keep a PDF of everything you submitted.`,`Name files Exhibit-A.pdf, Exhibit-B.pdf.`,`One rebuttal letter. No second ‘following up’ essay unless they ask.`]:[`Use the issuer’s dispute form and attach this letter as a PDF.`,`Call only to get a reference number. Put the number on the letter.`],disclaimer:w}}function A(e){let t=`${_(e.today)}

${e.platform||`[Platform]`} Seller / Account Review

Account: ${e.accountId||`[account id]`}
Case / appeal ID: ${e.caseId||`[case id]`}
Date of freeze or notice: ${_(e.freezeDate)}

Re: Appeal — restoration of account and release of funds

I am writing a single, complete appeal.

Facts, in order:
1. I operate the account ${e.accountId||`[account]`} on ${e.platform||`[platform]`}.
2. On ${_(e.freezeDate)} the account or payouts were restricted.
3. What happened, as I understand it: ${e.whatHappened.trim()||`[describe the notice in their words, then yours]`}.
${e.facts.trim()?`4. Additional facts:\n${e.facts.trim()}`:`4. I have not restated every ticket. The exhibits are the record.`}

What I am asking:
${e.ask.trim()||`Please restore selling privileges and release eligible funds. If a specific policy still applies, tell me the exact policy ID and the cure.`}

Exhibit index:
A. The original notice, full text
B. Identity / KYC documents already on file (redact what they do not need)
C. Order and tracking records for any cited transactions
D. Invoices from suppliers
E. Bank or tax identity consistent with the account
F. A one-page timeline

I will not open duplicate appeals. This is the file.

${E(e)}
${e.yourEmail||``}
${e.yourPhone||``}
`;return{title:`${e.platform||`Marketplace`} appeal`,subject:`Appeal — ${e.platform} — ${e.caseId||e.accountId||`account`}`,letter:t.trim(),checklist:[`Quote their notice back to them. Do not guess the policy.`,`One issue per appeal. ‘Also my other listing’ gets the file closed.`,`Tracking that matches the order they cited`,`No templates copied from Facebook groups — reviewers flag them`,`If funds are held, ask for the exact hold code and release date`],deadlines:[{label:`Appeal window`,date:`See the notice`,note:`Amazon POA and Stripe/PayPal holds often expire. File inside the window on the notice, not ‘soon.’`},{label:`This appeal dated`,date:_(e.today),note:``}],mailing:[`Submit in the platform’s appeal form. Paste the letter. Attach exhibits in the named order.`,`Save a PDF of the entire submission. Platforms disappear tickets.`],disclaimer:w}}function j(e){let t=`${e.yourAddress||`[Your address]`}
${e.yourEmail||``}
${e.yourPhone||``}

${_(e.today)}

${e.insurer||`[Insurer]`}
Appeals / Grievances

Policy: ${e.policyNo||`[policy]`}
Claim: ${e.claimNo||`[claim]`}
Line: ${e.line}
Date of loss: ${_(e.dateOfLoss)}
Denial date: ${_(e.denialDate)}

Re: Appeal of denial — claim ${e.claimNo||`[claim]`}

I appeal the denial dated ${_(e.denialDate)}.

Denial as stated by you: ${e.denialReason.trim()||`[paste the denial reason, verbatim]`}

Why the file is incomplete or incorrect:
${e.facts.trim()||`[Explain, in numbered sentences, what the denial missed: a code, a date of service, a photo, a police report, a medical record.]`}

I am not asking an algorithm to restyle the same denial. I am asking a human reviewer to read the attached file.

Please:
1. Confirm in writing that this appeal was received.
2. Identify the reviewer (name or license as your state requires).
3. Issue a written determination by the deadline in the denial letter or applicable law.

Exhibit index:
A. Denial letter, entire
B. Policy declarations / relevant coverage pages
C. First notice of loss
D. Photos, estimates, medical records, or repair invoices
E. Police / incident report if any
F. Prior correspondence
G. This letter

Sincerely,

${E(e)}
`;return{title:`Claims appeal file`,subject:`Appeal of denial — ${e.insurer||`claim`} ${e.claimNo||``}`.trim(),letter:t.trim(),checklist:[`Paste the denial reason verbatim. Arguing a reason they did not write wastes the appeal.`,`Policy page that actually covers this loss`,`A timeline: date of loss → FNOL → denial → this appeal`,`If health: include the member ID, date of service, CPT/HCPCS if you have them`,`If auto/home: photos before repairs, two estimates, police report number`,`Thirteen US states already limit AI-only medical denials. If a machine denied you, say so — and still attach the human file.`],deadlines:[{label:`Appeal window on the denial letter`,date:`Read the letter`,note:`Health appeals can be 180 days; property is often shorter. Use the date on their letter, not a blog.`},{label:`This appeal dated`,date:_(e.today),note:``}],mailing:[`Send through the insurer’s appeal portal and by Certified Mail to the address on the denial.`,`IDEXR organizes. It does not decide. If the amount is large, speak to a licensed advocate or attorney in your state.`],disclaimer:w}}function M(e){let t=(e.yourName||`packet`).replace(/[^a-z0-9]+/gi,`-`).replace(/^-|-$/g,``).toLowerCase();return`idexr-${e.kit}-${t||`draft`}.txt`}function N(e){return[e.title.toUpperCase(),e.subject,``,e.letter,``,`— EVIDENCE CHECKLIST —`,...e.checklist.map((e,t)=>`${t+1}. ${e}`),``,`— DEADLINES —`,...e.deadlines.map(e=>`${e.label}: ${e.date}${e.note?` — `+e.note:``}`),``,`— HOW TO SEND —`,...e.mailing.map((e,t)=>`${t+1}. ${e}`),``,e.disclaimer].join(`
`)}var P=n(),F=`aisett-draft-v1`;function I(e){try{let t=localStorage.getItem(F);if(!t)return C(e);let n=JSON.parse(t);return{...C(e),...n,kit:e}}catch{return C(e)}}function L(e){try{localStorage.setItem(F,JSON.stringify(e))}catch{}}function R({label:e,children:t}){return(0,P.jsxs)(`label`,{className:`block`,children:[(0,P.jsx)(`span`,{className:`mb-1.5 block text-[11px] tracking-[0.16em] text-mute uppercase`,children:e}),t]})}var z=`min-h-11 w-full border border-rule bg-paper px-3 text-ink outline-none transition-[box-shadow] focus:shadow-[0_0_0_2px_#9a3324]`,B=z+` py-2.5`;function V({slug:e}){let[t,n]=(0,S.useState)(()=>C(e)),[r,i]=(0,S.useState)(!1);(0,S.useEffect)(()=>{n(I(e))},[e]);let s=(0,S.useMemo)(()=>D({...t,kit:e}),[t,e]);function l(t){n(n=>{let r={...n,...t,kit:e};return L(r),r})}function d(){navigator.clipboard.writeText(N(s)).then(()=>{i(!0),setTimeout(()=>i(!1),1600)})}function f(){let n=new Blob([N(s)],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=M({...t,kit:e}),i.click(),URL.revokeObjectURL(r)}return(0,P.jsxs)(`div`,{className:`grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]`,children:[(0,P.jsxs)(`form`,{className:`no-print space-y-8`,onSubmit:e=>{e.preventDefault(),d()},children:[(0,P.jsxs)(`section`,{className:`space-y-4`,children:[(0,P.jsx)(`p`,{className:`text-[11px] tracking-[0.2em] text-seal uppercase`,children:`01 — You`}),(0,P.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,P.jsx)(R,{label:`Full name`,children:(0,P.jsx)(`input`,{className:z,value:t.yourName,onChange:e=>l({yourName:e.target.value}),autoComplete:`name`})}),(0,P.jsx)(R,{label:`Email`,children:(0,P.jsx)(`input`,{className:z,type:`email`,value:t.yourEmail,onChange:e=>l({yourEmail:e.target.value}),autoComplete:`email`})}),(0,P.jsx)(R,{label:`Phone`,children:(0,P.jsx)(`input`,{className:z,value:t.yourPhone,onChange:e=>l({yourPhone:e.target.value}),autoComplete:`tel`})}),(0,P.jsx)(R,{label:`Date of this letter`,children:(0,P.jsx)(`input`,{className:z,type:`date`,value:t.today,onChange:e=>l({today:e.target.value})})}),(0,P.jsx)(`div`,{className:`sm:col-span-2`,children:(0,P.jsx)(R,{label:`Your address`,children:(0,P.jsx)(`textarea`,{className:B,rows:2,value:t.yourAddress,onChange:e=>l({yourAddress:e.target.value})})})})]})]}),e===`deposit`&&(0,P.jsxs)(`section`,{className:`space-y-4`,children:[(0,P.jsx)(`p`,{className:`text-[11px] tracking-[0.2em] text-seal uppercase`,children:`02 — The tenancy`}),(0,P.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,P.jsx)(R,{label:`State`,children:(0,P.jsx)(`select`,{className:z,value:t.state,onChange:e=>l({state:e.target.value}),children:v.map(e=>(0,P.jsx)(`option`,{value:e.code,children:e.name},e.code))})}),(0,P.jsx)(R,{label:`Deposit paid`,children:(0,P.jsx)(`input`,{className:z,inputMode:`decimal`,value:t.depositAmount,onChange:e=>l({depositAmount:e.target.value}),placeholder:`2400`})}),(0,P.jsx)(R,{label:`Already returned`,children:(0,P.jsx)(`input`,{className:z,inputMode:`decimal`,value:t.returnedAmount,onChange:e=>l({returnedAmount:e.target.value})})}),(0,P.jsx)(R,{label:`Move-in`,children:(0,P.jsx)(`input`,{className:z,type:`date`,value:t.moveIn,onChange:e=>l({moveIn:e.target.value})})}),(0,P.jsx)(R,{label:`Move-out`,children:(0,P.jsx)(`input`,{className:z,type:`date`,value:t.moveOut,onChange:e=>l({moveOut:e.target.value})})}),(0,P.jsx)(`div`,{className:`sm:col-span-2`,children:(0,P.jsx)(R,{label:`Rental address`,children:(0,P.jsx)(`input`,{className:z,value:t.propertyAddress,onChange:e=>l({propertyAddress:e.target.value})})})}),(0,P.jsx)(R,{label:`Landlord / manager`,children:(0,P.jsx)(`input`,{className:z,value:t.landlordName,onChange:e=>l({landlordName:e.target.value})})}),(0,P.jsx)(R,{label:`Landlord address`,children:(0,P.jsx)(`input`,{className:z,value:t.landlordAddress,onChange:e=>l({landlordAddress:e.target.value})})}),(0,P.jsx)(`div`,{className:`sm:col-span-2`,children:(0,P.jsx)(R,{label:`Forwarding address for the check`,children:(0,P.jsx)(`input`,{className:z,value:t.forwarding,onChange:e=>l({forwarding:e.target.value})})})}),(0,P.jsx)(`div`,{className:`sm:col-span-2`,children:(0,P.jsx)(R,{label:`What happened — deductions you dispute, condition of the unit`,children:(0,P.jsx)(`textarea`,{className:B,rows:4,value:t.facts,onChange:e=>l({facts:e.target.value})})})})]})]}),e===`chargeback`&&(0,P.jsxs)(`section`,{className:`space-y-4`,children:[(0,P.jsx)(`p`,{className:`text-[11px] tracking-[0.2em] text-seal uppercase`,children:`02 — The charge`}),(0,P.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,P.jsx)(R,{label:`You are`,children:(0,P.jsxs)(`select`,{className:z,value:t.side,onChange:e=>l({side:e.target.value}),children:[(0,P.jsx)(`option`,{value:`consumer`,children:`The cardholder`}),(0,P.jsx)(`option`,{value:`merchant`,children:`The merchant`})]})}),(0,P.jsx)(R,{label:`Reason code`,children:(0,P.jsx)(`select`,{className:z,value:t.reasonCode,onChange:e=>l({reasonCode:e.target.value}),children:c.map(e=>(0,P.jsx)(`option`,{value:e.code,children:e.label},e.code))})}),(0,P.jsx)(R,{label:`Amount`,children:(0,P.jsx)(`input`,{className:z,inputMode:`decimal`,value:t.amount,onChange:e=>l({amount:e.target.value})})}),(0,P.jsx)(R,{label:`Transaction date`,children:(0,P.jsx)(`input`,{className:z,type:`date`,value:t.txnDate,onChange:e=>l({txnDate:e.target.value})})}),(0,P.jsx)(R,{label:`Dispute / ARN reference`,children:(0,P.jsx)(`input`,{className:z,value:t.disputeRef,onChange:e=>l({disputeRef:e.target.value})})}),(0,P.jsx)(R,{label:`Last four`,children:(0,P.jsx)(`input`,{className:z,value:t.lastFour,onChange:e=>l({lastFour:e.target.value}),maxLength:4})}),(0,P.jsx)(R,{label:`Merchant name`,children:(0,P.jsx)(`input`,{className:z,value:t.merchantName,onChange:e=>l({merchantName:e.target.value})})}),(0,P.jsx)(R,{label:`What was sold or billed`,children:(0,P.jsx)(`input`,{className:z,value:t.goods,onChange:e=>l({goods:e.target.value})})}),(0,P.jsx)(`div`,{className:`sm:col-span-2`,children:(0,P.jsx)(R,{label:`Facts a reviewer can check`,children:(0,P.jsx)(`textarea`,{className:B,rows:4,value:t.facts,onChange:e=>l({facts:e.target.value})})})})]})]}),e===`marketplace`&&(0,P.jsxs)(`section`,{className:`space-y-4`,children:[(0,P.jsx)(`p`,{className:`text-[11px] tracking-[0.2em] text-seal uppercase`,children:`02 — The account`}),(0,P.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,P.jsx)(R,{label:`Platform`,children:(0,P.jsx)(`select`,{className:z,value:t.platform,onChange:e=>l({platform:e.target.value}),children:o.map(e=>(0,P.jsx)(`option`,{children:e},e))})}),(0,P.jsx)(R,{label:`Account id`,children:(0,P.jsx)(`input`,{className:z,value:t.accountId,onChange:e=>l({accountId:e.target.value})})}),(0,P.jsx)(R,{label:`Case / appeal id`,children:(0,P.jsx)(`input`,{className:z,value:t.caseId,onChange:e=>l({caseId:e.target.value})})}),(0,P.jsx)(R,{label:`Date of freeze`,children:(0,P.jsx)(`input`,{className:z,type:`date`,value:t.freezeDate,onChange:e=>l({freezeDate:e.target.value})})}),(0,P.jsx)(`div`,{className:`sm:col-span-2`,children:(0,P.jsx)(R,{label:`What the notice said, then what actually happened`,children:(0,P.jsx)(`textarea`,{className:B,rows:4,value:t.whatHappened,onChange:e=>l({whatHappened:e.target.value})})})}),(0,P.jsx)(`div`,{className:`sm:col-span-2`,children:(0,P.jsx)(R,{label:`What you want restored`,children:(0,P.jsx)(`textarea`,{className:B,rows:3,value:t.ask,onChange:e=>l({ask:e.target.value})})})})]})]}),e===`claims`&&(0,P.jsxs)(`section`,{className:`space-y-4`,children:[(0,P.jsx)(`p`,{className:`text-[11px] tracking-[0.2em] text-seal uppercase`,children:`02 — The denial`}),(0,P.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,P.jsx)(R,{label:`Line`,children:(0,P.jsx)(`select`,{className:z,value:t.line,onChange:e=>l({line:e.target.value}),children:u.map(e=>(0,P.jsx)(`option`,{children:e},e))})}),(0,P.jsx)(R,{label:`Insurer`,children:(0,P.jsx)(`input`,{className:z,value:t.insurer,onChange:e=>l({insurer:e.target.value})})}),(0,P.jsx)(R,{label:`Policy no.`,children:(0,P.jsx)(`input`,{className:z,value:t.policyNo,onChange:e=>l({policyNo:e.target.value})})}),(0,P.jsx)(R,{label:`Claim no.`,children:(0,P.jsx)(`input`,{className:z,value:t.claimNo,onChange:e=>l({claimNo:e.target.value})})}),(0,P.jsx)(R,{label:`Date of loss`,children:(0,P.jsx)(`input`,{className:z,type:`date`,value:t.dateOfLoss,onChange:e=>l({dateOfLoss:e.target.value})})}),(0,P.jsx)(R,{label:`Denial date`,children:(0,P.jsx)(`input`,{className:z,type:`date`,value:t.denialDate,onChange:e=>l({denialDate:e.target.value})})}),(0,P.jsx)(`div`,{className:`sm:col-span-2`,children:(0,P.jsx)(R,{label:`Denial reason — paste their words`,children:(0,P.jsx)(`textarea`,{className:B,rows:3,value:t.denialReason,onChange:e=>l({denialReason:e.target.value})})})}),(0,P.jsx)(`div`,{className:`sm:col-span-2`,children:(0,P.jsx)(R,{label:`What the file is missing or got wrong`,children:(0,P.jsx)(`textarea`,{className:B,rows:4,value:t.facts,onChange:e=>l({facts:e.target.value})})})})]})]}),(0,P.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,P.jsxs)(`button`,{type:`submit`,className:`inline-flex min-h-12 items-center gap-2 bg-seal px-5 text-sm font-medium text-seal-fg hover:bg-seal-2`,children:[r?(0,P.jsx)(a,{className:`size-4`}):(0,P.jsx)(y,{className:`size-4`}),r?`Copied`:`Copy packet`]}),(0,P.jsxs)(`button`,{type:`button`,onClick:f,className:`inline-flex min-h-12 items-center gap-2 border border-ink px-5 text-sm hover:bg-paper-2`,children:[(0,P.jsx)(b,{className:`size-4`}),`Download .txt`]}),(0,P.jsxs)(`button`,{type:`button`,onClick:()=>window.print(),className:`inline-flex min-h-12 items-center gap-2 border border-rule px-5 text-sm hover:bg-paper-2`,children:[(0,P.jsx)(x,{className:`size-4`}),`Print / PDF`]})]})]}),(0,P.jsx)(`div`,{children:(0,P.jsxs)(`article`,{className:`print-sheet bg-paper shadow-paper`,children:[(0,P.jsxs)(`div`,{className:`flex items-end justify-between border-b border-rule px-6 py-5 sm:px-8`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{className:`font-display text-xl`,children:`IDEXR packet`}),(0,P.jsx)(`p`,{className:`text-[11px] tracking-[0.18em] text-mute uppercase`,children:s.title})]}),(0,P.jsx)(`p`,{className:`max-w-[12rem] text-right font-mono text-[10px] text-mute`,children:s.subject})]}),(0,P.jsx)(`pre`,{className:`max-h-[32rem] overflow-auto whitespace-pre-wrap px-6 py-6 font-sans text-[15px] leading-relaxed text-ink-2 sm:px-8 lg:max-h-none`,children:s.letter}),(0,P.jsxs)(`div`,{className:`border-t border-rule px-6 py-6 sm:px-8`,children:[(0,P.jsx)(`p`,{className:`text-[11px] tracking-[0.18em] text-seal uppercase`,children:`Checklist`}),(0,P.jsx)(`ul`,{className:`mt-3 space-y-2 text-sm text-ink-2`,children:s.checklist.map(e=>(0,P.jsxs)(`li`,{className:`flex gap-2`,children:[(0,P.jsx)(`span`,{className:`mt-2 size-1.5 shrink-0 bg-seal`}),e]},e))}),(0,P.jsx)(`p`,{className:`mt-6 text-[11px] tracking-[0.18em] text-seal uppercase`,children:`Deadlines`}),(0,P.jsx)(`ul`,{className:`mt-3 space-y-3`,children:s.deadlines.map(e=>(0,P.jsxs)(`li`,{children:[(0,P.jsx)(`p`,{className:`font-display text-lg tabular-nums`,children:e.date||`—`}),(0,P.jsxs)(`p`,{className:`text-sm text-mute`,children:[e.label,e.note?` · ${e.note}`:``]})]},e.label))}),(0,P.jsx)(`p`,{className:`mt-8 text-xs leading-relaxed text-mute`,children:s.disclaimer})]})]})})]})}function H(){let{slug:e}=d.useParams(),t=l(e);if(!t)throw i();return(0,P.jsxs)(p,{children:[(0,P.jsxs)(`div`,{className:`border-b border-rule`,children:[(0,P.jsxs)(`div`,{className:`mx-auto grid max-w-6xl items-end gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_minmax(0,280px)]`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{className:`text-[11px] tracking-[0.24em] text-seal uppercase`,children:t.kicker}),(0,P.jsxs)(`h1`,{className:`mt-2 font-display text-4xl sm:text-5xl`,children:[t.name,` packet`]}),(0,P.jsx)(`p`,{className:`mt-4 max-w-xl text-ink-2`,children:t.promise})]}),(0,P.jsx)(`img`,{src:t.image,alt:t.imageAlt,className:`hidden aspect-[3/2] w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 lg:block`})]}),(0,P.jsx)(`div`,{className:`mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-4 sm:px-6`,children:s.map(t=>(0,P.jsx)(r,{to:`/kit/$slug`,params:{slug:t.slug},className:`min-h-11 shrink-0 px-4 text-sm ${t.slug===e?`bg-ink text-paper`:`border border-rule hover:bg-paper-2`}`,children:t.name},t.slug))})]}),(0,P.jsx)(`div`,{className:`mx-auto max-w-6xl px-4 py-10 sm:px-6`,children:(0,P.jsx)(V,{slug:e})})]})}export{H as component};