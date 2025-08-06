// ZoomInfo Account Dashboard JavaScript

class AccountDashboard {
    constructor() {
        this.accounts = [];
        this.filteredAccounts = [];
        this.currentSort = { column: null, direction: 'asc' };
        this.searchTimeout = null;
        
        this.init();
    }
    
    init() {
        this.loadData();
        this.setupEventListeners();
        this.populateFilters();
    }
    
    loadData() {
        // Load accounts data from the provided JSON
        this.accounts = [
            {
                "Company Name": "Vanguard Innovations",
                "Assigned To": "Jordan Green",
                "Account Type": "Prospect",
                "Prospect Score": 74,
                "Account Notes": "Referred by analyst",
                "Drop Notes": "Nurture",
                "Website": "www.castillo.com",
                "LinkedIn URL": "https://linkedin.com/company/76",
                "Revenue Estimate": "$50 mil. - $100 mil.",
                "Employees": 1809,
                "Head Office": "Amandahaven, Vermont",
                "Country": "Australia",
                "Segmentation": "Enterprise",
                "Activity": 1,
                "Generation": 9,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Summit Solutions",
                "Assigned To": "Blake Davis",
                "Account Type": "Suspect",
                "Prospect Score": 77,
                "Account Notes": "Referred by analyst",
                "Drop Notes": "Do not call",
                "Website": "www.wilson.com",
                "LinkedIn URL": "https://linkedin.com/company/76",
                "Revenue Estimate": "$10 mil. - $25 mil.",
                "Employees": 790,
                "Head Office": "New Melissaside, Minnesota",
                "Country": "United States",
                "Segmentation": "Mid-Market",
                "Activity": 2,
                "Generation": 4,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Valiant Consulting",
                "Assigned To": "Morgan Lee",
                "Account Type": "Customer",
                "Prospect Score": 79,
                "Account Notes": "VC-backed",
                "Drop Notes": "Wrong fit",
                "Website": "www.campbell.com",
                "LinkedIn URL": "https://linkedin.com/company/914",
                "Revenue Estimate": "$50 mil. - $100 mil.",
                "Employees": 1846,
                "Head Office": "South Edward, Texas",
                "Country": "Germany",
                "Segmentation": "Enterprise",
                "Activity": 3,
                "Generation": 9,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Summit Consulting",
                "Assigned To": "Avery Reid",
                "Account Type": "Suspect",
                "Prospect Score": 78,
                "Account Notes": "New lead",
                "Drop Notes": "Lost to competition",
                "Website": "www.sullivan-rodriguez.com",
                "LinkedIn URL": "https://linkedin.com/company/517",
                "Revenue Estimate": "$50 mil. - $100 mil.",
                "Employees": 176,
                "Head Office": "Mckenzieside, Delaware",
                "Country": "France",
                "Segmentation": "Enterprise",
                "Activity": 4,
                "Generation": 2,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Vanguard Corporation",
                "Assigned To": "Jordan Green",
                "Account Type": "Prospect",
                "Prospect Score": 86,
                "Account Notes": "Needs follow up",
                "Drop Notes": "Out of territory",
                "Website": "www.campbell.com",
                "LinkedIn URL": "https://linkedin.com/company/111",
                "Revenue Estimate": "$25 mil. - $50 mil.",
                "Employees": 1285,
                "Head Office": "Thompsonton, Montana",
                "Country": "Australia",
                "Segmentation": "Mid-Market",
                "Activity": 1,
                "Generation": 2,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Momentum Networks",
                "Assigned To": "Morgan Lee",
                "Account Type": "Prospect",
                "Prospect Score": 87,
                "Account Notes": "VC-backed",
                "Drop Notes": "Lost to competition",
                "Website": "www.parker.com",
                "LinkedIn URL": "https://linkedin.com/company/768",
                "Revenue Estimate": "$25 mil. - $50 mil.",
                "Employees": 508,
                "Head Office": "South Johnshire, Wyoming",
                "Country": "United States",
                "Segmentation": "SMB",
                "Activity": 2,
                "Generation": 5,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Cypress Analytics",
                "Assigned To": "Taylor Smith",
                "Account Type": "Suspect",
                "Prospect Score": 77,
                "Account Notes": "Top 10 account",
                "Drop Notes": "Nurture",
                "Website": "www.leach-gibbs.com",
                "LinkedIn URL": "https://linkedin.com/company/834",
                "Revenue Estimate": "$25 mil. - $50 mil.",
                "Employees": 1095,
                "Head Office": "Fosterberg, Pennsylvania",
                "Country": "Germany",
                "Segmentation": "Enterprise",
                "Activity": 3,
                "Generation": 3,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Momentum Partners",
                "Assigned To": "Avery Reid",
                "Account Type": "Prospect",
                "Prospect Score": 76,
                "Account Notes": "VC-backed",
                "Drop Notes": "Do not call",
                "Website": "www.wilkerson.com",
                "LinkedIn URL": "https://linkedin.com/company/529",
                "Revenue Estimate": "$250 mil. - $500 mil.",
                "Employees": 533,
                "Head Office": "North Cheryl, Nebraska",
                "Country": "Germany",
                "Segmentation": "SMB",
                "Activity": 4,
                "Generation": 4,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Vertex Networks",
                "Assigned To": "Taylor Smith",
                "Account Type": "Suspect",
                "Prospect Score": 74,
                "Account Notes": "New lead",
                "Drop Notes": "Wrong fit",
                "Website": "www.hayes.com",
                "LinkedIn URL": "https://linkedin.com/company/521",
                "Revenue Estimate": "$25 mil. - $50 mil.",
                "Employees": 542,
                "Head Office": "Gibsonton, Tennessee",
                "Country": "United Kingdom",
                "Segmentation": "SMB",
                "Activity": 5,
                "Generation": 5,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Valiant Partners",
                "Assigned To": "Sydney Wong",
                "Account Type": "Prospect",
                "Prospect Score": 65,
                "Account Notes": "Budget review pending",
                "Drop Notes": "Do not call",
                "Website": "www.mullins.com",
                "LinkedIn URL": "https://linkedin.com/company/198",
                "Revenue Estimate": "$10 mil. - $25 mil.",
                "Employees": 431,
                "Head Office": "Valenciaburgh, Washington",
                "Country": "Canada",
                "Segmentation": "Mid-Market",
                "Activity": 6,
                "Generation": 6,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Atlas Networks",
                "Assigned To": "Jordan Green",
                "Account Type": "Suspect",
                "Prospect Score": 85,
                "Account Notes": "Strong pipeline",
                "Drop Notes": "Nurture",
                "Website": "www.jones.com",
                "LinkedIn URL": "https://linkedin.com/company/814",
                "Revenue Estimate": "$10 mil. - $25 mil.",
                "Employees": 1897,
                "Head Office": "South Elijahbury, Alabama",
                "Country": "Australia",
                "Segmentation": "Enterprise",
                "Activity": 1,
                "Generation": 1,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Radiant Partners",
                "Assigned To": "Avery Reid",
                "Account Type": "Customer",
                "Prospect Score": 90,
                "Account Notes": "Upsell potential",
                "Drop Notes": "Nurture",
                "Website": "www.saunders-cochran.com",
                "LinkedIn URL": "https://linkedin.com/company/802",
                "Revenue Estimate": "$50 mil. - $100 mil.",
                "Employees": 1932,
                "Head Office": "Marystad, North Dakota",
                "Country": "Germany",
                "Segmentation": "SMB",
                "Activity": 1,
                "Generation": 1,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Premier Analytics",
                "Assigned To": "Jordan Green",
                "Account Type": "Suspect",
                "Prospect Score": 71,
                "Account Notes": "VC-backed",
                "Drop Notes": "Nurture",
                "Website": "www.andrews-cannon.com",
                "LinkedIn URL": "https://linkedin.com/company/409",
                "Revenue Estimate": "$50 mil. - $100 mil.",
                "Employees": 1164,
                "Head Office": "Taylorberg, New Mexico",
                "Country": "Germany",
                "Segmentation": "SMB",
                "Activity": 5,
                "Generation": 5,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "Everest Analytics",
                "Assigned To": "Blake Davis",
                "Account Type": "Customer",
                "Prospect Score": 70,
                "Account Notes": "Needs follow up",
                "Drop Notes": "Lost to competition",
                "Website": "www.ryan-mcdaniel.com",
                "LinkedIn URL": "https://linkedin.com/company/563",
                "Revenue Estimate": "$250 mil. - $500 mil.",
                "Employees": 1774,
                "Head Office": "Christopherfort, South Carolina",
                "Country": "United States",
                "Segmentation": "Mid-Market",
                "Activity": 6,
                "Generation": 6,
                "SalesforceID": "0016g00000A1BCdEFA"
            },
            {
                "Company Name": "NexGen Industries",
                "Assigned To": "Jordan Green",
                "Account Type": "Suspect",
                "Prospect Score": 90,
                "Account Notes": "VC-backed",
                "Drop Notes": "Out of territory",
                "Website": "www.jacobson.com",
                "LinkedIn URL": "https://linkedin.com/company/329",
                "Revenue Estimate": "$100 mil. - $250 mil.",
                "Employees": 1021,
                "Head Office": "Duaneburgh, South Carolina",
                "Country": "United Kingdom",
                "Segmentation": "Enterprise",
                "Activity": 4,
                "Generation": 4,
                "SalesforceID": "0016g00000A1BCdEFA"
            }
        ];
        
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