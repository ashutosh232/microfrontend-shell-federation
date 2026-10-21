import React, { useState } from 'react';
import { useAppStore } from './store/useAppStore';
import { RemoteErrorBoundary } from './components/RemoteLoader';

export const App: React.FC = () => {
  const { session, activeModule, setActiveModule } = useAppStore();
  const [telemetryCount, setTelemetryCount] = useState(14);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '24px', color: '#333' }}>
      <header style={{ borderBottom: '2px solid #eee', paddingBottom: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', color: '#0969da' }}>Enterprise Microfrontend Shell Container</h1>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#666' }}>Host orchestrating independent Webpack 5 remotes</p>
        </div>
        <div style={{ textAlign: 'right', fontSize: '13px' }}>
          <div>User: <strong>{session?.name}</strong> ({session?.role})</div>
          <div style={{ color: '#2da44e' }}>● Host Shell Healthy (Port 3000)</div>
        </div>
      </header>

      <nav style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        {['reinsurance', 'claims', 'analytics'].map((mod) => (
          <button
            key={mod}
            onClick={() => setActiveModule(mod)}
            style={{
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              background: activeModule === mod ? '#0969da' : '#f6f8fa',
              color: activeModule === mod ? '#fff' : '#24292f',
              cursor: 'pointer',
              fontWeight: 600,
              textTransform: 'capitalize'
            }}
          >
            {mod} Remote Module
          </button>
        ))}
      </nav>

      <main>
        <RemoteErrorBoundary fallbackTitle={`${activeModule.toUpperCase()} Remote Container`}>
          <div style={{ background: '#f6f8fa', border: '1px solid #d0d7de', borderRadius: '8px', padding: '32px', textAlign: 'center' }}>
            <h2 style={{ textTransform: 'capitalize', margin: '0 0 12px 0' }}>{activeModule} Remote Boundary</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 20px auto', fontSize: '14px', color: '#57606a' }}>
              In production, this module is dynamically streamed over CDN via Webpack Module Federation without touching the host shell.
            </p>
            <button
              onClick={() => setTelemetryCount((c) => c + 1)}
              style={{ padding: '8px 16px', background: '#2da44e', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
            >
              Simulate Cross-MFE Event (Syncs: {telemetryCount})
            </button>
          </div>
        </RemoteErrorBoundary>
      </main>
    </div>
  );
};
