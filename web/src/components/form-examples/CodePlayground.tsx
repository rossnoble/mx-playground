import { Sandpack } from '@codesandbox/sandpack-react'

interface CodePlaygroundProps {
  code: string
  dependencies?: Record<string, string>
  title?: string
  accentColor?: string
}

export function CodePlayground({
  code,
  dependencies = {},
  title,
  accentColor = '#2563eb',
}: CodePlaygroundProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {title && (
        <div
          className="px-4 py-3 border-b"
          style={{ borderColor: accentColor }}
        >
          <h3 className="text-lg font-semibold" style={{ color: accentColor }}>
            {title}
          </h3>
        </div>
      )}
      <Sandpack
        template="react-ts"
        theme="dark"
        files={{
          '/App.tsx': code,
        }}
        customSetup={{
          dependencies: {
            ...dependencies,
          },
        }}
        options={{
          showNavigator: false,
          showTabs: false,
          editorHeight: 800,
          showLineNumbers: true,
          showInlineErrors: true,
          wrapContent: true,
          editorWidthPercentage: 50,
        }}
      />
    </div>
  )
}
