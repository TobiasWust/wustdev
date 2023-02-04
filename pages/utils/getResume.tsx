export default async function getResume() {
  const res = await fetch('https://raw.githubusercontent.com/TobiasWust/resume/main/resume.json');
  return res.json();
}
