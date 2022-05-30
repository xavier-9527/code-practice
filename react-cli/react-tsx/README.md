## React Demo

###### Created from create-react-app_v5.0.1

### Development Guideline

#### 1. EditorConfig

- Path `.editorconfig`

#### 2. Eslint
- Related npm packages

```sh
npm i -D eslint \
         @typescript-eslint/parser \
         @typescript-eslint/eslint-plugin \
         eslint-plugin-react
```

#### 3. Prettier

- Related npm packages

```sh
npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

#### 4. VSCode

- Path `.vscode/settings.json`

```json
{
	"files.eol": "\r\n",
	"editor.tabSize": 2,
	"eslint.enable": true,
	"[javascript]": {
		"editor.codeActionsOnSave": {
			"source.fixAll.eslint": true
		},
		"editor.formatOnSave": true,
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascriptreact]": {
		"editor.codeActionsOnSave": {
			"source.fixAll.eslint": true
		},
		"editor.formatOnSave": true,
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescript]": {
		"editor.codeActionsOnSave": {
			"source.fixAll.eslint": true
		},
		"editor.formatOnSave": true,
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescriptreact]": {
		"editor.codeActionsOnSave": {
			"source.fixAll.eslint": true
		},
		"editor.formatOnSave": true,
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"typescript.tsdk": "node_modules/typescript/lib"
}
```

#### 5. Use Airbnb Guideline

```sh
npm info "eslint-config-airbnb@latest" peerDependencies

npm install --save-dev eslint-config-airbnb@19.0.4 \
                       eslint-plugin-import@2.25.3 \
                       eslint-plugin-jsx-a11y@6.5.1 \
                       eslint-plugin-react@7.28.0 \
                       eslint-plugin-react-hooks@4.3.0 \

```

- Dependencies for `eslint-config-airbnb@19.0.4`

```json
{
	"eslint": "^7.32.0 || ^8.2.0",
	"eslint-plugin-import": "^2.25.3",
	"eslint-plugin-jsx-a11y": "^6.5.1",
	"eslint-plugin-react": "^7.28.0",
	"eslint-plugin-react-hooks": "^4.3.0"
}
```

```sh
npm info "eslint-config-airbnb-typescript@latest" peerDependencies

npm install --save-dev eslint-config-airbnb-typescript \
                       @typescript-eslint/eslint-plugin@^5.13.0 \
                       @typescript-eslint/parser@^5.0.0 \
                       eslint-plugin-import@2.25.3 \
                       eslint@8.2.0
```

- Dependencies for `eslint-config-airbnb-typescript@17.0.0`

```json
{
	"@typescript-eslint/eslint-plugin": "^5.13.0",
	"@typescript-eslint/parser": "^5.0.0",
	"eslint": "^7.32.0 || ^8.2.0",
	"eslint-plugin-import": "^2.25.3"
}
```

#### 6. Jest & Hooks
```sh
npm install --save-dev eslint-plugin-react-hooks eslint-plugin-jest
```
#### 7. The Lack of The Packages for Create React App about Dev Guideline as above
```sh
# Dependencies for eslint prettier
npm install --save-dev @typescript-eslint/parser@^5.0.0 \
                       @typescript-eslint/eslint-plugin@5.13.0 \
                       eslint-plugin-react@7.28.0 \
                       prettier \
                       eslint-config-prettier \
                       eslint-plugin-prettier

# Dependencies for jest eslint
npm install --save-dev eslint-plugin-jest        

# Dependencies for airbnb dev guideline
npm install --save-dev eslint-config-airbnb@19.0.4 \
                       eslint-plugin-import@2.25.3 \
                       eslint-plugin-jsx-a11y@6.5.1 \
                       eslint-plugin-react@7.28.0 \
                       eslint-plugin-react-hooks@4.3.0 \
                       eslint-config-airbnb-typescript \
                       @typescript-eslint/eslint-plugin@^5.13.0 \
                       @typescript-eslint/parser@^5.0.0
```
#### Others
- `eslint-plugin-eslint-comments`
>Additional ESLint rules for ESLint directive comments
```sh
npm install --save-dev eslint-plugin-eslint-comments
```
