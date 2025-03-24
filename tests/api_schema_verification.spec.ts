import { test, expect } from '@playwright/test';

test('verify response1 schema', async ({ request }) => {
    const response = await request.get('http://localhost:3000/response1');
    console.log('Response status:', response.status());
    expect(response.ok()).toBeTruthy();
    
    const responseData = await response.json();
    console.log('Response data:', responseData);
    
    // Schema validation
    const expectedSchema1 = {
      transverifyDebitcard: expect.any(Boolean),
      transVerifyAccts: expect.arrayContaining([
        expect.objectContaining({
          accountnumber: expect.any(String),
          accountType: expect.any(String)
        })
      ])
    };
    console.log('Expected schema for response1:', expectedSchema1);
    expect(responseData).toEqual(expect.objectContaining(expectedSchema1));
  
    // Additional specific checks
    expect(responseData.transVerifyAccts).toBeInstanceOf(Array);
    expect(responseData.transVerifyAccts.length).toBeGreaterThan(0);
    expect(responseData.transVerifyAccts[0].accountType).toBe('DDA');
  });

  test('verify response2 schema', async ({ request }) => {
    const response = await request.get('http://localhost:3000/response2');
    console.log('Response status:', response.status());
    expect(response.ok()).toBeTruthy();
    
    const responseData = await response.json();
    console.log('Response data:', responseData);
    
    const expectedSchema2 = {
      erros: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          code: expect.any(String),
          source: expect.objectContaining({
            pointers: expect.any(String)
          }),
          meta: expect.objectContaining({
            appid: expect.any(String)
          })
        })
      ])
    };
    console.log('Expected schema for response2:', expectedSchema2);
    expect(responseData).toEqual(expectedSchema2);
  });
  
  test('verify response3 schema', async ({ request }) => {
    const response = await request.get('http://localhost:3000/response3');
    console.log('Response status:', response.status());
    expect(response.ok()).toBeTruthy();
    
    const responseData = await response.json();
    console.log('Response data:', responseData);
    
    const expectedSchema3 = {
      erros: expect.arrayContaining([
        expect.objectContaining({
          adviceTest: expect.any(String),
          code: expect.any(String),
          details: expect.any(Array)
        })
      ])
    };
    console.log('Expected schema for response3:', expectedSchema3);
    expect(responseData).toEqual(expectedSchema3);
  });
  
  test('verify response4 schema', async ({ request }) => {
    const response = await request.get('http://localhost:3000/response4');
    console.log('Response status:', response.status());
    expect(response.ok()).toBeTruthy();
    
    const responseData = await response.json();
    console.log('Response data:', responseData);
    
    // Verify schema
    const expectedSchema4 = {
      erros: expect.arrayContaining([
        expect.objectContaining({
          adviceTest: expect.any(String),
          code: expect.any(String),
          title: expect.any(String)
        })
      ])
    };
    console.log('Expected schema for response4:', expectedSchema4);
    expect(responseData).toEqual(expectedSchema4);
  
    // Additional specific checks
    expect(responseData.erros).toHaveLength(3);
    expect(responseData.erros.map(error => error.code)).toEqual(['2000', '2001', '2002']);
    expect(new Set(responseData.erros.map(error => error.title))).toEqual(new Set(['title1']));
  });