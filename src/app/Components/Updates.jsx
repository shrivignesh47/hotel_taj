'use client';   
import React, { useEffect, useState } from 'react';
import './Styles/Updates.css';
import {SparklesText}   from '../../components/magicui/sparkles-text';

export default function Updates() {
  const [updateText, setUpdateText] = useState('');
  const fetchData = async () => {
    const sheetId = '1b7web2lBSweoh3SyHrUeLuxDgbgJ0lzb-LyRskM2ojk'; 
    const range = 'Updates!A1'; 
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=AIzaSyAAqb3DVZpY8K0kRu65iqPjPUW61n71Jto`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Google Sheets Data:', data);
      if (data.values && data.values[0] && data.values[0][0]) {
        setUpdateText(data.values[0][0]); 
      } else {
        console.error('No data found in the specified range.');
      }
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className="bg-[rgb(49,16,2)] text-white text-sm py-0 px-1 w-full justify-center text-center">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee-container">
            <h1 className="animate-marquee inline-block justify-center text-center">
              <SparklesText
                text={updateText ? updateText : 'Loading updates...'}
                disabled={false}
                speed={1}
                className="custom-class fabril-fatface text-2xl"
              />
            </h1>
          </div>
        </div>
      </div>
  );
}
