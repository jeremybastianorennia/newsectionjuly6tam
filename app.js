// ZoomInfo Account Dashboard JavaScript with Password Protection

class AccountDashboard {
    constructor() {
        this.accounts = [];
        this.filteredAccounts = [];
        this.currentSort = { column: null, direction: 'asc' };
        this.searchTimeout = null;
        this.isAuthenticated = false;
        
        this.init();
    }
    
    init() {
        this.checkAuthentication();
        this.setupLoginEventListeners();
    }
    
    checkAuthentication() {
        // Check if user is already authenticated (stored in session)
        const isLoggedIn = sessionStorage.getItem('dashboardAuth') === 'true';
        
        if (isLoggedIn) {
            this.isAuthenticated = true;
            this.showDashboard();
        } else {
            this.showLogin();
        }
    }
    
    showLogin() {
        // Create login screen if it doesn't exist
        if (!document.getElementById('loginScreen')) {
            this.createLoginScreen();
        }
        
        document.getElementById('loginScreen').style.display = 'flex';
        if (document.getElementById('dashboardContainer')) {
            document.getElementById('dashboardContainer').style.display = 'none';
        }
    }
    
    createLoginScreen() {
        const loginHTML = `
            <div id="loginScreen" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                z-index: 1000;
            ">
                <div style="
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    text-align: center;
                    min-width: 300px;
                ">
                    <div style="
                        width: 60px;
                        height: 60px;
                        background: linear-gradient(135deg, #ff6b6b, #ff8e53);
                        border-radius: 50%;
                        margin: 0 auto 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 24px;
                        color: white;
                    ">🔥</div>
                    <h2 style="margin: 0 0 10px 0; color: #333;">ZoomInfo Dashboard</h2>
                    <p style="margin: 0 0 30px 0; color: #666;">Enter password to continue</p>
                    
                    <div style="position: relative; margin-bottom: 20px;">
                        <input 
                            type="password" 
                            id="passwordInput" 
                            placeholder="Enter password"
                            style="
                                width: 100%;
                                padding: 12px 16px;
                                border: 2px solid #e1e5e9;
                                border-radius: 6px;
                                font-size: 16px;
                                box-sizing: border-box;
                                outline: none;
                                transition: border-color 0.3s;
                            "
                        />
                    </div>
                    
                    <button 
                        id="loginButton"
                        style="
                            width: 100%;
                            padding: 12px;
                            background: linear-gradient(135deg, #667eea, #764ba2);
                            color: white;
                            border: none;
                            border-radius: 6px;
                            font-size: 16px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: transform 0.2s, box-shadow 0.2s;
                        "
                    >Access Dashboard</button>
                    
                    <div id="loginError" style="
                        color: #ff6b6b;
                        margin-top: 15px;
                        font-size: 14px;
                        display: none;
                    ">Incorrect password. Please try again.</div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', loginHTML);
    }
    
    setupLoginEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'loginButton') {
                this.attemptLogin();
            }
        });
        
        document.addEventListener('keypress', (e) => {
            if (e.target && e.target.id === 'passwordInput' && e.key === 'Enter') {
                this.attemptLogin();
            }
        });
        
        // Add focus styles to password input
        document.addEventListener('focus', (e) => {
            if (e.target && e.target.id === 'passwordInput') {
                e.target.style.borderColor = '#667eea';
            }
        }, true);
        
        document.addEventListener('blur', (e) => {
            if (e.target && e.target.id === 'passwordInput') {
                e.target.style.borderColor = '#e1e5e9';
            }
        }, true);
    }
    
    attemptLogin() {
        const passwordInput = document.getElementById('passwordInput');
        const loginError = document.getElementById('loginError');
        const loginButton = document.getElementById('loginButton');
        
        const enteredPassword = passwordInput.value;
        const correctPassword = 'flames';
        
        // Add loading state to button
        loginButton.textContent = 'Checking...';
        loginButton.disabled = true;
        
        // Simulate slight delay for better UX
        setTimeout(() => {
            if (enteredPassword === correctPassword) {
                // Successful login
                this.isAuthenticated = true;
                sessionStorage.setItem('dashboardAuth', 'true');
                loginError.style.display = 'none';
                
                // Add success animation
                loginButton.textContent = '✓ Access Granted';
                loginButton.style.background = 'linear-gradient(135deg, #51cf66, #40c057)';
                
                setTimeout(() => {
                    this.showDashboard();
                }, 500);
                
            } else {
                // Failed login
                loginError.style.display = 'block';
                passwordInput.value = '';
                passwordInput.focus();
                
                // Reset button
                loginButton.textContent = 'Access Dashboard';
                loginButton.disabled = false;
                
                // Add shake animation to error
                loginError.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    loginError.style.animation = '';
                }, 500);
            }
        }, 800);
    }
    
    showDashboard() {
        // Hide login screen
        const loginScreen = document.getElementById('loginScreen');
        if (loginScreen) {
            loginScreen.style.display = 'none';
        }
        
        // Show dashboard container
        const dashboardContainer = document.getElementById('dashboardContainer');
        if (dashboardContainer) {
            dashboardContainer.style.display = 'block';
        }
        
        // Add logout functionality
        this.addLogoutButton();
        
        // Initialize dashboard functionality
        this.loadData();
        this.setupEventListeners();
        this.populateFilters();
    }
    
    addLogoutButton() {
        // Check if logout button already exists
        if (document.getElementById('logoutButton')) return;
        
        const logoutButton = document.createElement('button');
        logoutButton.id = 'logoutButton';
        logoutButton.textContent = 'Logout';
        logoutButton.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 8px 16px;
            background: #dc3545;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            z-index: 999;
            transition: background-color 0.3s;
        `;
        
        logoutButton.addEventListener('click', () => this.logout());
        logoutButton.addEventListener('mouseover', () => {
            logoutButton.style.backgroundColor = '#c82333';
        });
        logoutButton.addEventListener('mouseout', () => {
            logoutButton.style.backgroundColor = '#dc3545';
        });
        
        document.body.appendChild(logoutButton);
    }
    
    logout() {
        sessionStorage.removeItem('dashboardAuth');
        this.isAuthenticated = false;
        
        // Remove logout button
        const logoutButton = document.getElementById('logoutButton');
        if (logoutButton) {
            logoutButton.remove();
        }
        
        // Show login screen
        this.showLogin();
        
        // Clear password field
        const passwordInput = document.getElementById('passwordInput');
        if (passwordInput) {
            passwordInput.value = '';
        }
    }
    
    loadData() {
        // Load accounts data from the external data file
        this.accounts = accountsData; // This variable comes from data.js
        
        this.filteredAccounts = [...this.accounts];
        this.renderTable();
        this.updateResultsCount();
        this.updateAccountSelector();
    }
    
    populateFilters() {
        // Populate Assigned To filter
        const assignedToFilter = document.getElementById('assignedToFilter');
        const assignedToSet = new Set(this.accounts.map(account => account['Assigned To']));
        
        assignedToFilter.innerHTML = '';
        assignedToSet.forEach(person => {
            const option = document.createElement('option');
            option.value = person;
            option.textContent = person;
            assignedToFilter.appendChild(option);
        });
    }
    
    setupEventListeners() {
        // Filter event listeners
        document.getElementById('revenueFilter').addEventListener('change', () => this.applyFilters());
        document.getElementById('minEmployees').addEventListener('input', () => this.debouncedFilter());
        document.getElementById('maxEmployees').addEventListener('input', () => this.debouncedFilter());
        document.getElementById('segmentationFilter').addEventListener('change', () => this.applyFilters());
        document.getElementById('assignedToFilter').addEventListener('change', () => this.applyFilters());
        document.getElementById('searchInput').addEventListener('input', () => this.debouncedFilter());
        
        // Clear filters button
        document.getElementById('clearFilters').addEventListener('click', () => this.clearFilters());
        
        // Export data button
        document.getElementById('exportData').addEventListener('click', () => this.exportData());
        
        // Table sorting
        document.querySelectorAll('.sortable').forEach(header => {
            header.addEventListener('click', () => this.sortTable(header.dataset.column));
        });
        
        // Account selector
        document.getElementById('accountSelector').addEventListener('change', (e) => {
            this.showAccountDetails(e.target.value);
        });
    }
    
    debouncedFilter() {
        clearTimeout(this.searchTimeout);
        this.showLoading(true);
        
        this.searchTimeout = setTimeout(() => {
            this.applyFilters();
        }, 300);
    }
    
    applyFilters() {
        const revenueFilter = Array.from(document.getElementById('revenueFilter').selectedOptions).map(o => o.value);
        const minEmployees = parseInt(document.getElementById('minEmployees').value) || 0;
        const maxEmployees = parseInt(document.getElementById('maxEmployees').value) || Infinity;
        const segmentationFilter = Array.from(document.getElementById('segmentationFilter').selectedOptions).map(o => o.value);
        const assignedToFilter = Array.from(document.getElementById('assignedToFilter').selectedOptions).map(o => o.value);
        const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
        
        this.filteredAccounts = this.accounts.filter(account => {
            // Revenue filter
            if (revenueFilter.length > 0 && !revenueFilter.includes(account['Revenue Estimate'])) {
                return false;
            }
            
            // Employee count filter
            const employees = account['Employees'];
            if (employees < minEmployees || employees > maxEmployees) {
                return false;
            }
            
            // Segmentation filter
            if (segmentationFilter.length > 0 && !segmentationFilter.includes(account['Segmentation'])) {
                return false;
            }
            
            // Assigned To filter
            if (assignedToFilter.length > 0 && !assignedToFilter.includes(account['Assigned To'])) {
                return false;
            }
            
            // Search filter
            if (searchQuery) {
                const searchableText = [
                    account['Company Name'],
                    account['Assigned To'],
                    account['Account Type'],
                    account['Head Office'],
                    account['Country'],
                    account['Account Notes'],
                    account['Drop Notes']
                ].join(' ').toLowerCase();
                
                if (!searchableText.includes(searchQuery)) {
                    return false;
                }
            }
            
            return true;
        });
        
        this.renderTable();
        this.updateResultsCount();
        this.updateAccountSelector();
        this.showLoading(false);
    }
    
    sortTable(column) {
        // Update sort direction
        if (this.currentSort.column === column) {
            this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            this.currentSort.column = column;
            this.currentSort.direction = 'asc';
        }
        
        // Sort filtered accounts
        this.filteredAccounts.sort((a, b) => {
            let aValue = a[column];
            let bValue = b[column];
            
            // Handle numeric values
            if (column === 'Employees' || column === 'Prospect Score') {
                aValue = Number(aValue);
                bValue = Number(bValue);
            }
            
            // Handle string comparison
            if (typeof aValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }
            
            let comparison = 0;
            if (aValue > bValue) comparison = 1;
            if (aValue < bValue) comparison = -1;
            
            return this.currentSort.direction === 'desc' ? -comparison : comparison;
        });
        
        this.renderTable();
        this.updateSortIndicators();
    }
    
    updateSortIndicators() {
        // Reset all sort indicators
        document.querySelectorAll('.sortable').forEach(header => {
            header.classList.remove('sort-asc', 'sort-desc');
        });
        
        // Add current sort indicator
        if (this.currentSort.column) {
            const header = document.querySelector(`[data-column="${this.currentSort.column}"]`);
            if (header) {
                header.classList.add(`sort-${this.currentSort.direction}`);
            }
        }
    }
    
    renderTable() {
        const tbody = document.getElementById('accountsTableBody');
        tbody.innerHTML = '';
        
        this.filteredAccounts.forEach(account => {
            const row = document.createElement('tr');
            
            const revenueClass = this.getRevenueClass(account['Revenue Estimate']);
            const statusBadgeClass = this.getStatusBadgeClass(account['Account Type']);
            
            row.innerHTML = `
                <td><strong>${account['Company Name']}</strong></td>
                <td>${account['Assigned To']}</td>
                <td><span class="status-badge ${statusBadgeClass}">${account['Account Type']}</span></td>
                <td><strong>${account['Prospect Score']}</strong></td>
                <td>${account['Account Notes']}</td>
                <td>${account['Drop Notes']}</td>
                <td class="link-cell"><a href="https://${account['Website']}" target="_blank">${account['Website']}</a></td>
                <td class="link-cell"><a href="${account['LinkedIn URL']}" target="_blank">LinkedIn</a></td>
                <td class="${revenueClass}">${account['Revenue Estimate']}</td>
                <td>${account['Employees'].toLocaleString()}</td>
                <td>${account['Head Office']}</td>
                <td>${account['Country']}</td>
                <td>${account['Segmentation']}</td>
            `;
            
            tbody.appendChild(row);
        });
    }
    
    getRevenueClass(revenue) {
        if (revenue.includes('$10 mil') || revenue.includes('$25 mil')) {
            return 'revenue-low';
        } else if (revenue.includes('$50 mil') || revenue.includes('$100 mil')) {
            return 'revenue-medium';
        } else {
            return 'revenue-high';
        }
    }
    
    getStatusBadgeClass(accountType) {
        return accountType.toLowerCase();
    }
    
    updateResultsCount() {
        const count = this.filteredAccounts.length;
        document.getElementById('resultsCount').textContent = `${count} account${count !== 1 ? 's' : ''} found`;
    }
    
    updateAccountSelector() {
        const selector = document.getElementById('accountSelector');
        const detailsSection = document.getElementById('accountDetailsSection');
        
        // Clear existing options
        selector.innerHTML = '<option value="">Choose an account...</option>';
        
        // Add options for filtered accounts
        this.filteredAccounts.forEach(account => {
            const option = document.createElement('option');
            option.value = account['Company Name'];
            option.textContent = account['Company Name'];
            selector.appendChild(option);
        });
        
        // Always show account details section when there are accounts
        if (this.filteredAccounts.length > 0) {
            detailsSection.classList.remove('hidden');
        } else {
            detailsSection.classList.add('hidden');
        }
        
        // Reset account details cards to hidden state
        document.getElementById('accountDetailsCards').classList.add('hidden');
        selector.value = '';
    }
    
    showAccountDetails(companyName) {
        const detailsCards = document.getElementById('accountDetailsCards');
        
        if (!companyName) {
            detailsCards.classList.add('hidden');
            return;
        }
        
        const account = this.filteredAccounts.find(acc => acc['Company Name'] === companyName);
        if (!account) return;
        
        detailsCards.classList.remove('hidden');
        
        // Update scoring with animation
        this.animateScore('activityScoreFill', 'activityScoreValue', account['Activity'], 10);
        this.animateScore('generationScoreFill', 'generationScoreValue', account['Generation'], 10);
        
        // Update account information
        document.getElementById('accountNotes').textContent = account['Account Notes'];
        document.getElementById('dropNotes').textContent = account['Drop Notes'];
        document.getElementById('salesforceId').textContent = account['SalesforceID'];
    }
    
    animateScore(fillElementId, valueElementId, score, maxScore) {
        const fillElement = document.getElementById(fillElementId);
        const valueElement = document.getElementById(valueElementId);
        const percentage = (score / maxScore) * 100;
        
        // Update value immediately
        valueElement.textContent = `${score}/${maxScore}`;
        
        // Reset and animate fill
        fillElement.style.width = '0%';
        fillElement.style.transition = 'none';
        
        // Force reflow then animate
        fillElement.offsetHeight;
        fillElement.style.transition = 'width 1s cubic-bezier(0.16, 1, 0.3, 1)';
        fillElement.style.width = `${percentage}%`;
    }
    
    clearFilters() {
        // Reset all filter inputs
        const revenueFilter = document.getElementById('revenueFilter');
        const segmentationFilter = document.getElementById('segmentationFilter');
        const assignedToFilter = document.getElementById('assignedToFilter');
        
        // Clear multi-select options
        Array.from(revenueFilter.options).forEach(option => option.selected = false);
        Array.from(segmentationFilter.options).forEach(option => option.selected = false);
        Array.from(assignedToFilter.options).forEach(option => option.selected = false);
        
        // Clear other inputs
        document.getElementById('minEmployees').value = '';
        document.getElementById('maxEmployees').value = '';
        document.getElementById('searchInput').value = '';
        
        // Reset account selector and hide details
        document.getElementById('accountSelector').value = '';
        document.getElementById('accountDetailsCards').classList.add('hidden');
        
        // Apply filters (which will show all accounts)
        this.applyFilters();
    }
    
    exportData() {
        if (this.filteredAccounts.length === 0) {
            alert('No data to export. Please adjust your filters.');
            return;
        }
        
        // Create CSV content
        const headers = Object.keys(this.filteredAccounts[0]);
        const csvContent = [
            headers.join(','),
            ...this.filteredAccounts.map(account => 
                headers.map(header => `"${account[header]}"`).join(',')
            )
        ].join('\n');
        
        // Create and trigger download
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'zoominfo_accounts_export.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
    
    showLoading(show) {
        const indicator = document.getElementById('loadingIndicator');
        if (show) {
            indicator.classList.remove('hidden');
        } else {
            indicator.classList.add('hidden');
        }
    }
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AccountDashboard();
});

// Add CSS for shake animation
const shakeCSS = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}
`;

// Insert the CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = shakeCSS;
document.head.appendChild(styleSheet);
