export const sendMail = async ({ from, to, text, subject }) => {
    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: process.env.RESEND_FROM,
            to: [to],
            subject,
            reply_to: from,
            text,
        }),
        signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
        throw new Error(`Resend ${res.status}: ${await res.text()}`);
    }

    return res.json();
};
