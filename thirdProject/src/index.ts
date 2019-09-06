import { HtmlReport } from './outputTargets/HtmlReport';
import { ConsoleReport } from './outputTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();

const manUnitedWinsAnalysis = new WinsAnalysis('Man United');
const consoleReport = new ConsoleReport();

const arsenalWinsAnalysis = new WinsAnalysis('Arsenal');
const htmlReport = new HtmlReport();

const summary = new Summary(manUnitedWinsAnalysis, consoleReport);
summary.buildAndPrintReport(reader.matches);

const htmlSummary = new Summary(arsenalWinsAnalysis, htmlReport);
htmlSummary.buildAndPrintReport(reader.matches);
