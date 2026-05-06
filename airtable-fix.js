const AIRTABLE_API_KEY = 'patVT0G4sWHGnFLOW.182a336c1b044633ebba758235f414f16f87bd75182b6fb511525b8e0382b10c';
const AIRTABLE_BASE_ID = 'appfcAoH1C4aA53IR';
const AIRTABLE_TABLE = 'tblyX6lO8K1ruIm9R';

async function submitToAirtable(data) {
  const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fields: data })
  });
  const result = await response.json();
  console.log('Airtable result:', result);
  return response.ok;
}
