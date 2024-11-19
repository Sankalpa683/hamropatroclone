import React, { useEffect, useState } from "react";

const SaralPatroData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const response = await fetch("https://api.saralpatro.com/graphql", {
          credentials: "omit",
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:121.0) Gecko/20100101 Firefox/121.0",
            Accept: "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/json",
            "Sec-GPC": "1",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
          },
          referrer: "https://saralpatro.com/",
          body: JSON.stringify({
            query: `
              {
                dates(bsYear: 2080) {
                  bsDay
                  bsMonth
                  bsYear
                  adDay
                  adMonth
                  adYear
                  bsDayNp
                  bsMonthNp
                  bsYearNp
                  weekday
                  weekdayStrEn
                  weekdayStrNp
                  bsMonthStrEn
                  bsMonthStrNp
                  adMonthStrEn
                  adMonthStrNp
                  isHoliday
                  tithiCode
                  tithiStrNp
                  tithiStrEn
                  astral {
                    moonphase
                    moonphaseStr
                    sunrise {
                      hour
                      minute
                    }
                    sunset {
                      hour
                      minute
                    }
                    dawn {
                      hour
                      minute
                    }
                    dusk {
                      hour
                      minute
                    }
                    noon {
                      hour
                      minute
                    }
                  }
                  specialDays {
                    bratabanda
                    bibaha
                    rudri
                    grihaprabesh
                  }
                  events {
                    strEn
                    strNp
                    isHoliday
                  }
                }
              }
            `,
          }),
          method: "POST",
          mode: "cors",
        });

        const result = await response.json();
        // setData(result.data);
        console.log(result.data)
      } catch (err) {
        // setError(err.message);
        console.log(err.message)
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Saral Patro Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data available</p>}
    </div>
  );
};

export default SaralPatroData;
