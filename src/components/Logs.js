import React from 'react';
import { Link } from 'react-router-dom';

const Logs = ({ logs, habitId }) => {
    const logLinks = logs.length > 0 ?
    logs.map(log => (<p key={log.id}><Link to={`/habits/${habitId}/logs/${log.id}`}>{log.date}</Link></p>)) :
    null
    return logLinks;
};

export default Logs;